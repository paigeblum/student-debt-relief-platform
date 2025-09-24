import { Metadata } from 'next'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { OnboardingFlow } from '@/components/onboarding/onboarding-flow'

export const metadata: Metadata = {
  title: 'Complete Your Profile | Boomerang',
  description: 'Complete your profile to get started with the platform.',
}

export default async function OnboardingPage({
  searchParams,
}: {
  searchParams: { role?: string }
}) {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect('/auth/signin')
  }

  // If user already has a role and profile, redirect to dashboard
  if (session.user.role && (session.user.studentProfile || session.user.donorProfile)) {
    switch (session.user.role) {
      case 'ADMIN':
        redirect('/admin')
      case 'STUDENT':
        redirect('/dashboard/student')
      case 'DONOR':
        redirect('/dashboard/donor')
    }
  }

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome to Boomerang
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Let's set up your profile to get you started
          </p>
        </div>

        <OnboardingFlow
          user={session.user}
          preselectedRole={searchParams.role}
        />
      </div>
    </div>
  )
}