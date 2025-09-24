import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: NextRequest) {
  try {
    const body = await req.text()
    const signature = headers().get('stripe-signature')!

    let event
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object
        await handlePaymentSuccess(paymentIntent)
        break
      }
      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object
        await handlePaymentFailure(paymentIntent)
        break
      }
      case 'customer.created': {
        const customer = event.data.object
        await handleCustomerCreated(customer)
        break
      }
      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }
}

async function handlePaymentSuccess(paymentIntent: any) {
  try {
    const donation = await prisma.donation.findFirst({
      where: { stripePaymentIntentId: paymentIntent.id }
    })

    if (donation) {
      await prisma.donation.update({
        where: { id: donation.id },
        data: {
          status: 'COMPLETED',
          processedAt: new Date(),
          stripeChargeId: paymentIntent.latest_charge
        }
      })

      // Update campaign totals if applicable
      if (donation.groupCampaignId) {
        await prisma.groupCampaign.update({
          where: { id: donation.groupCampaignId },
          data: {
            currentAmount: {
              increment: donation.amount
            }
          }
        })
      }

      // Create notification for student
      if (donation.studentId) {
        await prisma.notification.create({
          data: {
            toUserId: donation.studentId,
            title: 'Donation Received',
            message: `You received a $${donation.amount} donation!`,
            type: 'DONATION_RECEIVED'
          }
        })
      }
    }
  } catch (error) {
    console.error('Error handling payment success:', error)
  }
}

async function handlePaymentFailure(paymentIntent: any) {
  try {
    await prisma.donation.updateMany({
      where: { stripePaymentIntentId: paymentIntent.id },
      data: { status: 'FAILED' }
    })
  } catch (error) {
    console.error('Error handling payment failure:', error)
  }
}

async function handleCustomerCreated(customer: any) {
  try {
    await prisma.donorProfile.updateMany({
      where: { stripeCustomerId: customer.id },
      data: { stripeCustomerId: customer.id }
    })
  } catch (error) {
    console.error('Error handling customer creation:', error)
  }
}