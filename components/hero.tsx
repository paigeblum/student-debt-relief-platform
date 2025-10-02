import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Users, DollarSign, GraduationCap } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-bg-hero py-24 lg:py-32">
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Together, we can minimize barriers to higher education
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Donate to help pay off others' student loans, or apply to receive assistance with your student loans.
            </p>

            {/* Trust Message */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-green-800 font-medium text-sm">
                🔒 <strong>100% Secure:</strong> Every dollar goes directly to loan servicers.{' '}
                <a href="/how-it-works" className="underline hover:no-underline">See how it works for more information.</a>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8 py-6 h-auto button-hover-lift gradient-bg-primary" asChild>
                <Link href="/auth/signup" className="flex flex-col items-center space-y-1">
                  <span className="font-semibold">I'm a Student</span>
                  <span className="text-sm opacity-90 font-normal">Get Started</span>
                </Link>
              </Button>
              <Button size="lg" className="text-lg px-8 py-6 h-auto button-hover-lift bg-green-600 hover:bg-green-700 text-white" asChild>
                <Link href="/donate" className="flex flex-col items-center space-y-1">
                  <span className="font-semibold">I'm a Donor</span>
                  <span className="text-sm opacity-90 font-normal">Choose how to give</span>
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}