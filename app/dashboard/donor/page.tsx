import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Donor Dashboard | Boomerang',
  description: 'Donor dashboard coming soon.',
}

export default function DonorDashboardPage() {
  // Temporary redirect to homepage until dashboard is built
  redirect('/')
}