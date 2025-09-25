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
              Together, we can end student debt{' '}
              <span className="text-primary">one loan at a time</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join a community where students get real help with their loans, and donors make a
              direct impact on the next generation's future.
            </p>

            {/* Trust Message */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-green-800 font-medium text-sm">
                🔒 <strong>100% Secure:</strong> All donations go directly to loan servicers — never to students' pockets.
                We pay Sallie Mae, Nelnet, and other servicers on behalf of students.
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
                  <span className="font-semibold">Start Giving</span>
                  <span className="text-sm opacity-90 font-normal">Browse students to support</span>
                </Link>
              </Button>
            </div>

            {/* Simple Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground font-medium">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">$2.5M</div>
                <div className="text-sm text-muted-foreground font-medium">Debt Relieved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-600">95%</div>
                <div className="text-sm text-muted-foreground font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}