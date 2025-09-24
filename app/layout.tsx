import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/providers/providers'
import { Navigation } from '@/components/navigation/navigation'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Boomerang - Student Debt Relief',
  description: 'Together, we can end student debt — one loan at a time. Connecting students with donors for real debt relief.',
  keywords: 'student debt, education, donations, debt relief, boomerang',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Temporarily removing server session call to avoid database connection issues on Vercel
  // Will re-enable once authentication environment is properly configured
  const session = null

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers session={session}>
          <div className="min-h-screen bg-background">
            <Navigation />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  )
}