'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { RoleSelection } from './role-selection'
import { StudentProfileForm } from './student-profile-form'
import { DonorProfileForm } from './donor-profile-form'
import { OnboardingComplete } from './onboarding-complete'
import { useToast } from '@/hooks/use-toast'

interface OnboardingFlowProps {
  user: {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: 'ADMIN' | 'STUDENT' | 'DONOR'
  }
  preselectedRole?: string
}

type Step = 'role' | 'profile' | 'complete'

export function OnboardingFlow({ user, preselectedRole }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState<Step>(
    user.role ? 'profile' : 'role'
  )
  const [selectedRole, setSelectedRole] = useState<'STUDENT' | 'DONOR'>(
    (preselectedRole?.toUpperCase() as 'STUDENT' | 'DONOR') ||
    (user.role === 'STUDENT' ? 'STUDENT' : 'DONOR')
  )
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const steps = [
    { id: 'role', title: 'Choose Role', description: 'Select how you want to participate' },
    { id: 'profile', title: 'Create Profile', description: 'Tell us about yourself' },
    { id: 'complete', title: 'All Set!', description: 'Welcome to the community' }
  ]

  const currentStepIndex = steps.findIndex(step => step.id === currentStep)
  const progress = ((currentStepIndex + 1) / steps.length) * 100

  const handleRoleSelection = async (role: 'STUDENT' | 'DONOR') => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/user/role', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role }),
      })

      if (!response.ok) {
        throw new Error('Failed to update role')
      }

      setSelectedRole(role)
      setCurrentStep('profile')
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update your role. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleProfileComplete = () => {
    setCurrentStep('complete')
  }

  const handleGetStarted = () => {
    // Redirect to appropriate dashboard
    switch (selectedRole) {
      case 'STUDENT':
        router.push('/dashboard/student')
        break
      case 'DONOR':
        router.push('/dashboard/donor')
        break
      default:
        router.push('/')
    }
  }

  return (
    <div className="space-y-6">
      {/* Progress indicator */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Step {currentStepIndex + 1} of {steps.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} />
            <div className="text-center">
              <h3 className="font-medium">{steps[currentStepIndex].title}</h3>
              <p className="text-sm text-muted-foreground">
                {steps[currentStepIndex].description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step content */}
      {currentStep === 'role' && (
        <RoleSelection
          onRoleSelect={handleRoleSelection}
          isLoading={isLoading}
          preselectedRole={preselectedRole}
        />
      )}

      {currentStep === 'profile' && selectedRole === 'STUDENT' && (
        <StudentProfileForm
          user={user}
          onComplete={handleProfileComplete}
        />
      )}

      {currentStep === 'profile' && selectedRole === 'DONOR' && (
        <DonorProfileForm
          user={user}
          onComplete={handleProfileComplete}
        />
      )}

      {currentStep === 'complete' && (
        <OnboardingComplete
          role={selectedRole}
          onGetStarted={handleGetStarted}
        />
      )}
    </div>
  )
}