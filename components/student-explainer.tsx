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
      title: 'Verify Your Loans',
      description: 'Securely connect your student loan accounts through our verified integration'
    },
    {
      icon: Eye,
      title: 'Choose Visibility',
      description: 'Stay completely private or share your story to connect with donors'
    },
    {
      icon: GraduationCap,
      title: 'Join the Network',
      description: 'Access support, resources, and a community that understands your journey'
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
              Verify your student loans, choose to stay private or share your story,
              and join a network of support that's helping students graduate debt-free.
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

          {/* Benefits & Privacy */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Privacy Options */}
            <Card className="border-2 border-blue-200 bg-blue-50/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <EyeOff className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold">Stay Anonymous</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Keep your identity completely private</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Still eligible for general fund support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Access to community resources</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Share Story */}
            <Card className="border-2 border-green-200 bg-green-50/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-semibold">Share Your Story</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Connect directly with donors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Receive personal messages of support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Higher potential for individual support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8 py-6 button-hover-lift gradient-bg-primary" asChild>
              <Link href="/auth/signup?role=student">
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