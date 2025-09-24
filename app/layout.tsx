import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/providers/providers'
import { Navigation } from '@/components/navigation/navigation'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Boomerang - Student Debt Relief',
  description: 'Together, we can end student debt — one loan at a time. Connecting students with donors for real debt relief.',
  keywords: 'student debt, education, donations, debt relief, boomerang',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

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