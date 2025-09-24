'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { Loader2, CreditCard } from 'lucide-react'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface PaymentMethodSetupProps {
  onComplete: () => void
}

function PaymentMethodForm({ onComplete }: PaymentMethodSetupProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)

    try {
      const { error } = await stripe.confirmSetup({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/dashboard/donor`,
        },
      })

      if (error) {
        toast({
          title: "Payment setup failed",
          description: error.message,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Payment method saved!",
          description: "Your payment method has been securely saved.",
        })
        onComplete()
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to save payment method. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <CreditCard className="mr-2 h-5 w-5" />
          Add Payment Method
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <PaymentElement
            options={{
              layout: "tabs"
            }}
          />
          <Button
            type="submit"
            className="w-full"
            disabled={!stripe || isLoading}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Payment Method
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export function PaymentMethodSetup({ onComplete }: PaymentMethodSetupProps) {
  const [clientSecret, setClientSecret] = useState<string>()
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useState(() => {
    const setupPaymentMethod = async () => {
      try {
        const response = await fetch('/api/donor/setup-payment-method', {
          method: 'POST',
        })

        if (!response.ok) {
          throw new Error('Failed to setup payment method')
        }

        const data = await response.json()
        setClientSecret(data.clientSecret)
      } catch (error) {
        toast({
          title: "Setup failed",
          description: "Failed to initialize payment setup. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    setupPaymentMethod()
  })

  if (isLoading) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin" />
        </CardContent>
      </Card>
    )
  }

  if (!clientSecret) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="text-center py-8">
          <p className="text-muted-foreground">Failed to load payment setup</p>
          <Button
            onClick={() => window.location.reload()}
            className="mt-4"
          >
            Try Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: 'stripe',
        },
      }}
    >
      <PaymentMethodForm onComplete={onComplete} />
    </Elements>
  )
}