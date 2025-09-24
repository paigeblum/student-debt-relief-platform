import { Metadata } from 'next'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { SignInForm } from '@/components/auth/signin-form'
import { BoomerangWordmark } from '@/components/ui/boomerang-logo'

export const metadata: Metadata = {
  title: 'Sign In | Boomerang',
  description: 'Sign in to your account to continue helping students or managing your profile.',
}

export default async function SignInPage({
  searchParams,
}: {
  searchParams: { callbackUrl?: string; error?: string }
}) {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect(searchParams.callbackUrl || '/')
  }

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <div className="relative z-20">
          <BoomerangWordmark variant="white" size="lg" />
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "This platform helped me reduce my student debt by 70%. I can now focus on my career
              instead of worrying about payments. The donor community here truly cares about education."
            </p>
            <footer className="text-sm">Sofia Rodriguez, Computer Science Graduate</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>
          <SignInForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <a
              href="/auth/signup"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}