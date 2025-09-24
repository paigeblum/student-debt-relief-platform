'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { useToast } from '@/hooks/use-toast'
import { Loader2, Heart } from 'lucide-react'

interface DonorProfileFormProps {
  user: {
    id: string
    name?: string | null
    email?: string | null
  }
  onComplete: () => void
}

interface DonorFormData {
  firstName: string
  lastName: string
  company?: string
  phone?: string
  isAnonymous: boolean
}

export function DonorProfileForm({ user, onComplete }: DonorProfileFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<DonorFormData>({
    defaultValues: {
      firstName: user.name?.split(' ')[0] || '',
      lastName: user.name?.split(' ').slice(1).join(' ') || '',
      isAnonymous: false,
    }
  })

  const isAnonymous = watch('isAnonymous')

  const onSubmit = async (data: DonorFormData) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/user/donor-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to create profile')
      }

      toast({
        title: "Profile created!",
        description: "Your donor profile has been created successfully.",
      })
      onComplete()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create your profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="mr-2 h-5 w-5" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                {...register('firstName', { required: 'First name is required' })}
              />
              {errors.firstName && (
                <p className="text-sm text-red-600 mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                {...register('lastName', { required: 'Last name is required' })}
              />
              {errors.lastName && (
                <p className="text-sm text-red-600 mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="company">Company (Optional)</Label>
            <Input
              id="company"
              {...register('company')}
              placeholder="Your company or organization"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input
              id="phone"
              type="tel"
              {...register('phone')}
            />
          </div>
        </CardContent>
      </Card>

      {/* Privacy Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="isAnonymous">Anonymous Donations</Label>
              <p className="text-sm text-muted-foreground">
                Hide your identity from students when making donations
              </p>
            </div>
            <Switch
              id="isAnonymous"
              checked={isAnonymous}
              onCheckedChange={(checked) => setValue('isAnonymous', checked)}
            />
          </div>

          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-medium mb-2">About Privacy</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Anonymous donations protect your privacy completely</li>
              <li>• Non-anonymous donations allow students to see your name and send thank you messages</li>
              <li>• You can change this setting anytime in your profile</li>
              <li>• Your contact information is always kept private</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Donation Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Donation Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-blue-50 p-4">
            <h4 className="font-medium text-blue-900 mb-2">How Donations Work</h4>
            <div className="text-sm text-blue-800 space-y-1">
              <p><strong>General Fund:</strong> Tax-deductible donations distributed to students in need</p>
              <p><strong>Individual Students:</strong> Direct support to specific students (not tax-deductible)</p>
              <p><strong>Group Campaigns:</strong> Pool donations for multiple students (tax status varies)</p>
            </div>
          </div>

          <div className="rounded-lg bg-green-50 p-4">
            <h4 className="font-medium text-green-900 mb-2">Your Impact</h4>
            <div className="text-sm text-green-800 space-y-1">
              <p>• Track your donation history and impact on student success</p>
              <p>• Receive updates on students you've supported</p>
              <p>• Get tax receipts for eligible donations</p>
              <p>• Join a community of education supporters</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button type="submit" size="lg" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create Donor Profile
        </Button>
      </div>
    </form>
  )
}