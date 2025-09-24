import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Student Dashboard | Boomerang',
  description: 'Student dashboard coming soon.',
}

export default function StudentDashboardPage() {
  // Temporary redirect to homepage until dashboard is built
  redirect('/')
}