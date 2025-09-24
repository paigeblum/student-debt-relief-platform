'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, GraduationCap, Heart, ArrowRight } from 'lucide-react'

interface OnboardingCompleteProps {
  role: 'STUDENT' | 'DONOR'
  onGetStarted: () => void
}

export function OnboardingComplete({ role, onGetStarted }: OnboardingCompleteProps) {
  const content = {
    STUDENT: {
      title: "Welcome to the Student Community!",
      subtitle: "Your profile has been created successfully",
      description: "Your profile is now under review by our team. Once approved, donors will be able to see your profile and provide support.",
      nextSteps: [
        "We'll review your profile within 24-48 hours",
        "You'll receive an email notification when approved",
        "Upload documents to speed up the verification process",
        "Complete your profile with additional details"
      ],
      icon: GraduationCap,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    DONOR: {
      title: "Welcome to the Donor Community!",
      subtitle: "Your profile has been created successfully",
      description: "You're now ready to make a difference in students' lives. Browse verified student profiles and start supporting education today.",
      nextSteps: [
        "Browse student profiles to find students to support",
        "Make your first donation to the general fund or specific students",
        "Track your donation history and impact",
        "Connect with the community of education supporters"
      ],
      icon: Heart,
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  }

  const config = content[role]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="text-center">
          <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${config.bgColor}`}>
            <config.icon className={`h-8 w-8 ${config.color}`} />
          </div>
          <CardTitle className="text-2xl">{config.title}</CardTitle>
          <p className="text-muted-foreground">{config.subtitle}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-muted-foreground leading-relaxed">
              {config.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">What's Next?</h3>
            <div className="space-y-3">
              {config.nextSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <h4 className="font-medium mb-2">Need Help?</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Our support team is here to help you get the most out of the platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 text-sm">
              <span>📧 support@boomerang.org</span>
              <span className="hidden sm:inline">•</span>
              <span>💬 Live chat available</span>
              <span className="hidden sm:inline">•</span>
              <span>📚 Help documentation</span>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button size="lg" onClick={onGetStarted}>
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}