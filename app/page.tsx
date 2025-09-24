import { Hero } from '@/components/hero'
import { DonorOptions } from '@/components/donor-options'
import { StudentExplainer } from '@/components/student-explainer'
import { TrustSection } from '@/components/trust-section'
import { Stats } from '@/components/stats'

export default function HomePage() {
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