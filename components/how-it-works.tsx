import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  UserPlus,
  FileText,
  CheckCircle,
  Heart,
  Search,
  CreditCard,
  GraduationCap,
  Shield
} from 'lucide-react'

export function HowItWorks() {
  const studentSteps = [
    {
      step: 1,
      title: 'Create Profile',
      description: 'Sign up and complete your student profile with academic and financial information',
      icon: UserPlus,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      step: 2,
      title: 'Verify Documents',
      description: 'Upload loan statements and academic records for verification',
      icon: FileText,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      step: 3,
      title: 'Get Approved',
      description: 'Our team reviews and approves your profile for donor visibility',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      step: 4,
      title: 'Receive Support',
      description: 'Connect with donors and receive contributions toward your educational debt',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ]

  const donorSteps = [
    {
      step: 1,
      title: 'Browse Students',
      description: 'Explore verified student profiles and their educational goals',
      icon: Search,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      step: 2,
      title: 'Choose Impact',
      description: 'Select individual students, general fund, or group campaigns to support',
      icon: GraduationCap,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      step: 3,
      title: 'Make Donation',
      description: 'Securely donate with multiple payment options and tax receipt generation',
      icon: CreditCard,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      step: 4,
      title: 'Track Progress',
      description: 'Follow student progress and see the real impact of your contribution',
      icon: Shield,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform makes it simple for students to get help and for donors to make a meaningful impact.
            Here's how both sides of our community work together.
          </p>
        </div>

        <div className="space-y-16">
          {/* For Students */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-2 text-blue-600">For Students</h3>
              <p className="text-muted-foreground">Get help with your educational debt in four simple steps</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {studentSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  {/* Connector line */}
                  {index < studentSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-muted to-transparent -translate-y-1/2 z-0" />
                  )}

                  <Card className="relative z-10 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.bgColor} mb-4`}>
                        <step.icon className={`h-8 w-8 ${step.color}`} />
                      </div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">
                        Step {step.step}
                      </div>
                      <h4 className="text-lg font-semibold mb-3">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link href="/auth/signup?role=student">Apply as Student</Link>
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted" />
            </div>
            <div className="relative flex justify-center">
              <div className="bg-white px-4 text-muted-foreground">
                <Heart className="h-6 w-6" />
              </div>
            </div>
          </div>

          {/* For Donors */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-2 text-green-600">For Donors</h3>
              <p className="text-muted-foreground">Make a meaningful impact in a student's life</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {donorSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  {/* Connector line */}
                  {index < donorSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-muted to-transparent -translate-y-1/2 z-0" />
                  )}

                  <Card className="relative z-10 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.bgColor} mb-4`}>
                        <step.icon className={`h-8 w-8 ${step.color}`} />
                      </div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">
                        Step {step.step}
                      </div>
                      <h4 className="text-lg font-semibold mb-3">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link href="/donate">Start Donating</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-16 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Shield className="h-8 w-8 text-blue-600 mx-auto" />
              <h4 className="font-semibold">Secure & Verified</h4>
              <p className="text-sm text-muted-foreground">
                All students undergo verification process before being listed
              </p>
            </div>
            <div className="space-y-2">
              <CreditCard className="h-8 w-8 text-green-600 mx-auto" />
              <h4 className="font-semibold">Safe Payments</h4>
              <p className="text-sm text-muted-foreground">
                Secure payment processing with tax receipts for eligible donations
              </p>
            </div>
            <div className="space-y-2">
              <Heart className="h-8 w-8 text-red-600 mx-auto" />
              <h4 className="font-semibold">Real Impact</h4>
              <p className="text-sm text-muted-foreground">
                Track your contribution's impact on student success and debt reduction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}