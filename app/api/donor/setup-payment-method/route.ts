import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { createSetupIntent, createCustomer } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

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

    // Create setup intent for saving payment method
    const setupIntent = await createSetupIntent(donorProfile.stripeCustomerId!)

    return NextResponse.json({
      clientSecret: setupIntent.client_secret,
      customerId: donorProfile.stripeCustomerId,
    })
  } catch (error) {
    console.error('Setup payment method error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}