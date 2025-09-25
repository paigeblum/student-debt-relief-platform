'use client'

import React, { useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from '@/lib/stripe-client'
import { CheckoutForm } from './checkout-form'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { DollarSign, Heart } from 'lucide-react'

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'GENERAL_FUND' | 'INDIVIDUAL_STUDENT' | 'GROUP_CAMPAIGN'
  studentId?: string
  studentName?: string
  groupCampaignId?: string
  campaignName?: string
}

const presetAmounts = [25, 50, 100, 250, 500, 1000]

export function DonationModal({
  isOpen,
  onClose,
  type,
  studentId,
  studentName,
  groupCampaignId,
  campaignName
}: DonationModalProps) {
  const [step, setStep] = useState<'amount' | 'payment'>('amount')
  const [amount, setAmount] = useState<number>(100)
  const [customAmount, setCustomAmount] = useState('')
  const [message, setMessage] = useState('')
  const [isAnonymous, setIsAnonymous] = useState(false)

  const displayName =
    type === 'GENERAL_FUND' ? 'General Fund' :
    type === 'INDIVIDUAL_STUDENT' ? studentName || 'Student' :
    campaignName || 'Group Campaign'

  const handleAmountSelect = (selectedAmount: number) => {
    setAmount(selectedAmount)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    const numValue = parseFloat(value)
    if (!isNaN(numValue) && numValue > 0) {
      setAmount(numValue)
    }
  }

  const handleContinueToPayment = () => {
    if (amount > 0) {
      setStep('payment')
    }
  }

  const handlePaymentSuccess = () => {
    setTimeout(() => {
      onClose()
      setStep('amount')
      setAmount(100)
      setCustomAmount('')
      setMessage('')
      setIsAnonymous(false)
    }, 3000)
  }

  const handleClose = () => {
    onClose()
    setStep('amount')
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            Donate to {displayName}
          </DialogTitle>
        </DialogHeader>

        {step === 'amount' && (
          <div className="space-y-6">
            {/* Amount Selection */}
            <div>
              <h3 className="font-semibold mb-4">Choose Amount</h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {presetAmounts.map((presetAmount) => (
                  <Button
                    key={presetAmount}
                    variant={amount === presetAmount ? 'default' : 'outline'}
                    className="h-auto p-4 flex flex-col"
                    onClick={() => handleAmountSelect(presetAmount)}
                  >
                    <DollarSign className="h-4 w-4 mb-1" />
                    <span className="font-semibold">${presetAmount}</span>
                  </Button>
                ))}
              </div>

              <div className="space-y-2">
                <Label htmlFor="custom-amount">Custom Amount</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    id="custom-amount"
                    placeholder="Enter amount"
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder={
                  type === 'GENERAL_FUND'
                    ? "Words of encouragement for students..."
                    : "Personal message for the recipient..."
                }
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
              />
            </div>

            {/* Privacy Options */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="anonymous"
                checked={isAnonymous}
                onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
              />
              <Label htmlFor="anonymous" className="text-sm">
                Make this donation anonymous
              </Label>
            </div>

            {/* Impact Preview */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-4">
                <h4 className="font-semibold mb-2">Your ${amount} Impact:</h4>
                <ul className="text-sm space-y-1 text-blue-800">
                  {amount >= 25 && <li>• Covers textbook costs for one class</li>}
                  {amount >= 100 && <li>• Pays for one month of loan payments</li>}
                  {amount >= 250 && <li>• Reduces interest accumulation significantly</li>}
                  {amount >= 500 && <li>• Provides major debt relief</li>}
                </ul>
                <p className="text-xs text-blue-600 mt-2">
                  🔒 Paid directly to loan servicers — never to students as cash
                </p>
              </CardContent>
            </Card>

            <Button
              className="w-full"
              size="lg"
              onClick={handleContinueToPayment}
              disabled={amount <= 0}
            >
              <Heart className="h-4 w-4 mr-2" />
              Continue to Payment
            </Button>
          </div>
        )}

        {step === 'payment' && (
          <Elements stripe={stripePromise}>
            <CheckoutForm
              amount={amount}
              type={type}
              studentId={studentId}
              groupCampaignId={groupCampaignId}
              message={message}
              isAnonymous={isAnonymous}
              onSuccess={handlePaymentSuccess}
            />
          </Elements>
        )}
      </DialogContent>
    </Dialog>
  )
}