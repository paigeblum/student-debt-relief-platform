import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Hero } from '@/components/hero'
import { DonorOptions } from '@/components/donor-options'
import { StudentExplainer } from '@/components/student-explainer'
import { TrustSection } from '@/components/trust-section'
import { Stats } from '@/components/stats'

export default async function HomePage() {
  const session = await getServerSession(authOptions)

  // Redirect authenticated users to their dashboard
  if (session?.user) {
    switch (session.user.role) {
      case 'ADMIN':
        redirect('/admin')
      case 'STUDENT':
        redirect('/dashboard/student')
      case 'DONOR':
        redirect('/dashboard/donor')
      default:
        redirect('/onboarding')
    }
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <DonorOptions />
      <StudentExplainer />
      <Stats />
      <TrustSection />
    </div>
  )
}