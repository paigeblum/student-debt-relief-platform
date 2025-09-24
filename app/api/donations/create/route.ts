import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { createPaymentIntent, createCustomer } from '@/lib/stripe'
import { z } from 'zod'

const createDonationSchema = z.object({
  amount: z.number().min(1).max(10000),
  type: z.enum(['GENERAL_FUND', 'INDIVIDUAL_STUDENT', 'GROUP_CAMPAIGN']),
  studentId: z.string().optional(),
  groupCampaignId: z.string().optional(),
  isAnonymous: z.boolean().default(false),
  message: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const data = createDonationSchema.parse(body)

    // Get or create donor profile
    let donorProfile = await prisma.donorProfile.findUnique({
      where: { userId: session.user.id }
    })

    if (!donorProfile) {
      return NextResponse.json({ error: 'Donor profile required' }, { status: 400 })
    }

    // Create Stripe customer if needed
    if (!donorProfile.stripeCustomerId) {
      const customer = await createCustomer(session.user.email!, session.user.name!)
      donorProfile = await prisma.donorProfile.update({
        where: { id: donorProfile.id },
        data: { stripeCustomerId: customer.id }
      })
    }

    // Validate student/campaign exists if specified
    if (data.type === 'INDIVIDUAL_STUDENT' && data.studentId) {
      const student = await prisma.studentProfile.findUnique({
        where: { id: data.studentId, status: 'VERIFIED' }
      })
      if (!student) {
        return NextResponse.json({ error: 'Student not found or not verified' }, { status: 400 })
      }
    }

    if (data.type === 'GROUP_CAMPAIGN' && data.groupCampaignId) {
      const campaign = await prisma.groupCampaign.findUnique({
        where: { id: data.groupCampaignId, isActive: true }
      })
      if (!campaign) {
        return NextResponse.json({ error: 'Campaign not found or inactive' }, { status: 400 })
      }
    }

    // Create payment intent
    const paymentIntent = await createPaymentIntent(
      data.amount,
      donorProfile.stripeCustomerId,
      {
        donorId: session.user.id,
        studentId: data.studentId || '',
        groupCampaignId: data.groupCampaignId || '',
        type: data.type,
      }
    )

    // Create donation record
    const donation = await prisma.donation.create({
      data: {
        donorId: session.user.id,
        studentId: data.studentId,
        groupCampaignId: data.groupCampaignId,
        amount: data.amount,
        type: data.type,
        isAnonymous: data.isAnonymous,
        message: data.message,
        stripePaymentIntentId: paymentIntent.id,
        status: 'PENDING',
      }
    })

    return NextResponse.json({
      donationId: donation.id,
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    console.error('Create donation error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid request data' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}