'use client'

import React, { useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, CreditCard } from 'lucide-react'
import { useSession } from 'next-auth/react'

interface CheckoutFormProps {
  amount: number
  type: 'GENERAL_FUND' | 'INDIVIDUAL_STUDENT' | 'GROUP_CAMPAIGN'
  studentId?: string
  groupCampaignId?: string
  message?: string
  isAnonymous?: boolean
  onSuccess?: () => void
}

const cardElementOptions = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
}

export function CheckoutForm({
  amount,
  type,
  studentId,
  groupCampaignId,
  message,
  isAnonymous = false,
  onSuccess
}: CheckoutFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements || !session) {
      setError('Payment system not ready. Please try again.')
      return
    }

    const cardElement = elements.getElement(CardElement)
    if (!cardElement) {
      setError('Card information is required.')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // Create donation and payment intent
      const response = await fetch('/api/donations/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          type,
          studentId,
          groupCampaignId,
          message,
          isAnonymous,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to create donation')
      }

      const { clientSecret } = await response.json()

      // Confirm payment
      const { error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: session.user?.name || '',
            email: session.user?.email || '',
          },
        },
      })

      if (stripeError) {
        setError(stripeError.message || 'Payment failed')
      } else {
        setSuccess(true)
        onSuccess?.()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Payment Successful!</h3>
            <p className="text-gray-600 mb-4">
              Thank you for your ${amount} donation. Your contribution will make a real difference.
            </p>
            <p className="text-sm text-gray-500">
              You should receive an email confirmation shortly.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Your Donation</CardTitle>
        <p className="text-sm text-gray-600">
          ${amount} {type === 'GENERAL_FUND' ? 'to General Fund' :
                     type === 'INDIVIDUAL_STUDENT' ? 'to Student' :
                     'to Group Campaign'}
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Card Information
            </label>
            <div className="p-3 border border-gray-300 rounded-md">
              <CardElement options={cardElementOptions} />
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <CreditCard className="h-4 w-4 mr-2" />
              <span>🔒 Your payment is secure and encrypted</span>
            </div>
            <p className="text-xs text-gray-500">
              All donations go directly to loan servicers — never to students personally.
              This ensures your money reduces student debt effectively.
            </p>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={!stripe || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Processing Payment...
              </>
            ) : (
              <>
                <CreditCard className="h-4 w-4 mr-2" />
                Donate ${amount}
              </>
            )}
          </Button>

          <p className="text-xs text-center text-gray-500">
            By completing this donation, you agree to our terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}