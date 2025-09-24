import { Metadata } from 'next'
import Link from 'next/link'
import { SignInForm } from '@/components/auth/signin-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Student Sign In | Boomerang',
  description: 'Sign in to your student account to manage your profile and connect with donors.',
}

export default function SignInPage({
  searchParams,
}: {
  searchParams: { callbackUrl?: string; error?: string }
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
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
        <div className="w-full max-w-md">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur">
            <CardHeader className="space-y-1 text-center pb-8">
              <CardTitle className="text-3xl font-bold">Student Sign In</CardTitle>
              <CardDescription className="text-base">
                Welcome back! Sign in to manage your profile and connect with donors
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <SignInForm />

              <div className="text-center space-y-3">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <Link
                    href="/auth/signup"
                    className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    Create student account
                  </Link>
                </p>
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs text-muted-foreground mb-2">Want to donate instead?</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/donate">Browse Students to Support</Link>
                  </Button>
                </div>
              </div>

              {/* Social Proof */}
              <div className="pt-6 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-3">
                    Trusted by thousands of students and donors
                  </p>
                  <div className="flex justify-center space-x-6 text-xs text-muted-foreground">
                    <span>$2.4M+ funded</span>
                    <span>•</span>
                    <span>1,200+ students helped</span>
                    <span>•</span>
                    <span>92% success rate</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Help */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Need help?{' '}
              <Link href="/how-it-works" className="text-primary hover:underline">
                Learn how Boomerang works
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}