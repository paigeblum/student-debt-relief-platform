'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Loader2, GraduationCap } from 'lucide-react'

interface StudentProfileFormProps {
  user: {
    id: string
    name?: string | null
    email?: string | null
  }
  onComplete: () => void
}

interface StudentFormData {
  firstName: string
  lastName: string
  dateOfBirth: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  schoolName: string
  major: string
  graduationDate: string
  totalDebtAmount: number
  monthlyPayment: number
  interestRate: number
  loanServicer: string
  employmentStatus: string
  annualIncome: number
  displayName: string
  bio: string
}

export function StudentProfileForm({ user, onComplete }: StudentProfileFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<StudentFormData>({
    defaultValues: {
      firstName: user.name?.split(' ')[0] || '',
      lastName: user.name?.split(' ').slice(1).join(' ') || '',
      displayName: user.name || '',
    }
  })

  const onSubmit = async (data: StudentFormData) => {
    setIsLoading(true)
    try {
      // First set the user role to STUDENT
      const roleResponse = await fetch('/api/user/role', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: 'STUDENT' }),
      })

      if (!roleResponse.ok) {
        throw new Error('Failed to set role')
      }

      // Then create the student profile
      const response = await fetch('/api/user/student-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to create profile')
      }

      toast({
        title: "Profile created!",
        description: "Your student profile has been created successfully.",
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
            <GraduationCap className="mr-2 h-5 w-5" />
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                {...register('dateOfBirth', { required: 'Date of birth is required' })}
              />
              {errors.dateOfBirth && (
                <p className="text-sm text-red-600 mt-1">{errors.dateOfBirth.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              {...register('address', { required: 'Address is required' })}
            />
            {errors.address && (
              <p className="text-sm text-red-600 mt-1">{errors.address.message}</p>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                {...register('city', { required: 'City is required' })}
              />
              {errors.city && (
                <p className="text-sm text-red-600 mt-1">{errors.city.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                {...register('state', { required: 'State is required' })}
              />
              {errors.state && (
                <p className="text-sm text-red-600 mt-1">{errors.state.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="zipCode">ZIP Code</Label>
              <Input
                id="zipCode"
                {...register('zipCode', { required: 'ZIP code is required' })}
              />
              {errors.zipCode && (
                <p className="text-sm text-red-600 mt-1">{errors.zipCode.message}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Academic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Academic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="schoolName">School Name</Label>
            <Input
              id="schoolName"
              {...register('schoolName', { required: 'School name is required' })}
            />
            {errors.schoolName && (
              <p className="text-sm text-red-600 mt-1">{errors.schoolName.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="major">Major/Field of Study</Label>
              <Input
                id="major"
                {...register('major', { required: 'Major is required' })}
              />
              {errors.major && (
                <p className="text-sm text-red-600 mt-1">{errors.major.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="graduationDate">Expected Graduation Date</Label>
              <Input
                id="graduationDate"
                type="date"
                {...register('graduationDate')}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financial Information */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="totalDebtAmount">Total Debt Amount ($)</Label>
              <Input
                id="totalDebtAmount"
                type="number"
                step="0.01"
                {...register('totalDebtAmount', {
                  required: 'Total debt amount is required',
                  min: { value: 0, message: 'Amount must be positive' }
                })}
              />
              {errors.totalDebtAmount && (
                <p className="text-sm text-red-600 mt-1">{errors.totalDebtAmount.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="monthlyPayment">Monthly Payment ($)</Label>
              <Input
                id="monthlyPayment"
                type="number"
                step="0.01"
                {...register('monthlyPayment', { min: 0 })}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="interestRate">Interest Rate (%)</Label>
              <Input
                id="interestRate"
                type="number"
                step="0.01"
                {...register('interestRate', { min: 0, max: 100 })}
              />
            </div>
            <div>
              <Label htmlFor="loanServicer">Loan Servicer</Label>
              <Input
                id="loanServicer"
                {...register('loanServicer')}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="employmentStatus">Employment Status</Label>
              <Input
                id="employmentStatus"
                {...register('employmentStatus')}
              />
            </div>
            <div>
              <Label htmlFor="annualIncome">Annual Income ($)</Label>
              <Input
                id="annualIncome"
                type="number"
                step="0.01"
                {...register('annualIncome', { min: 0 })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Information */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="displayName">Display Name</Label>
            <Input
              id="displayName"
              {...register('displayName', { required: 'Display name is required' })}
            />
            <p className="text-sm text-muted-foreground mt-1">
              This name will be shown to potential donors
            </p>
            {errors.displayName && (
              <p className="text-sm text-red-600 mt-1">{errors.displayName.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell potential donors about yourself, your goals, and how their support will help you..."
              {...register('bio', { required: 'Bio is required' })}
            />
            <p className="text-sm text-muted-foreground mt-1">
              Share your story and goals to connect with donors
            </p>
            {errors.bio && (
              <p className="text-sm text-red-600 mt-1">{errors.bio.message}</p>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button type="submit" size="lg" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create Student Profile
        </Button>
      </div>
    </form>
  )
}