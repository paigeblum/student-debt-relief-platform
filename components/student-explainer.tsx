import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  GraduationCap,
  Shield,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export function StudentExplainer() {
  const steps = [
    {
      icon: Shield,
      title: 'Verify Your Loan',
      description: 'Connect to your service provider or upload your statement'
    },
    {
      icon: Eye,
      title: 'Choose Visibility',
      description: 'Stay anonymous or share your story'
    },
    {
      icon: GraduationCap,
      title: 'Join the Network',
      description: 'Donors pay your loan servicer directly via gifts to the general fund, directly to you, or to groups you have joined'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
              <GraduationCap className="h-4 w-4" />
              <span>For Students</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Get Real Help with Your Student Debt
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload just one loan statement to get verified. Donors pay your loan servicers directly —
              never to you personally. Choose to stay private or share your story.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="border-0 shadow-md card-hover-float">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8 py-6 button-hover-lift gradient-bg-primary" asChild>
              <Link href="/auth/signup">
                Get Started as a Student
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Free to join • Secure verification • Full privacy control
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}