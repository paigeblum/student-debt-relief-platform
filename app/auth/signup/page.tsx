import { Metadata } from 'next'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { SignUpForm } from '@/components/auth/signup-form'
import { BoomerangWordmark } from '@/components/ui/boomerang-logo'

export const metadata: Metadata = {
  title: 'Sign Up | Boomerang',
  description: 'Join our community to help students or get help with your educational debt.',
}

export default async function SignUpPage({
  searchParams,
}: {
  searchParams: { role?: string; callbackUrl?: string }
}) {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect(searchParams.callbackUrl || '/')
  }

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-700" />
        <div className="relative z-20">
          <BoomerangWordmark variant="white" size="lg" />
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "I've donated to 8 students so far and it's incredibly rewarding to see them succeed.
              The platform makes it easy to track their progress and know that my contribution matters."
            </p>
            <footer className="text-sm">David Chen, Software Engineer & Donor</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Join our community
            </h1>
            <p className="text-sm text-muted-foreground">
              Create an account to get started
            </p>
          </div>
          <SignUpForm preselectedRole={searchParams.role} />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <a
              href="/auth/signin"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}