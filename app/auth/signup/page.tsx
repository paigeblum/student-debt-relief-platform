import { Metadata } from 'next'
import Link from 'next/link'
import { SignUpForm } from '@/components/auth/signup-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Heart, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Sign Up | Boomerang',
  description: 'Join our community to help students or get help with your educational debt.',
}

export default function SignUpPage({
  searchParams,
}: {
  searchParams: { role?: string; callbackUrl?: string }
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <div className="container flex h-16 items-center justify-end py-4">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Main Content */}
      <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <div className="w-full max-w-lg">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur">
            <CardHeader className="space-y-1 text-center pb-8">
              <CardTitle className="text-3xl font-bold">Join our community</CardTitle>
              <CardDescription className="text-base">
                Help students succeed or get help with your education
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <SignUpForm preselectedRole={searchParams.role} />

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link
                    href="/auth/signin"
                    className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>

              {/* Role Benefits */}
              <div className="pt-6 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <GraduationCap className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-xs font-medium">Students</p>
                    <p className="text-xs text-muted-foreground">Get help with loans</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-xs font-medium">Donors</p>
                    <p className="text-xs text-muted-foreground">Support education</p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="pt-4 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-3">
                    Join thousands making a difference
                  </p>
                  <div className="flex justify-center space-x-4 text-xs text-muted-foreground">
                    <span>$2.4M+ funded</span>
                    <span>•</span>
                    <span>3,400+ donors</span>
                    <span>•</span>
                    <span>1,200+ students</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Help */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Questions?{' '}
              <Link href="/how-it-works" className="text-primary hover:underline">
                Learn how it works
              </Link>
              {' or '}
              <Link href="/about" className="text-primary hover:underline">
                read our story
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}