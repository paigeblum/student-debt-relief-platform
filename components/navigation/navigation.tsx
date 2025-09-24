'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'
import { BoomerangWordmark } from '@/components/ui/boomerang-logo'
import { useSession, signOut } from 'next-auth/react'
import { LogOut, User } from 'lucide-react'

export function Navigation() {
  const { data: session, status } = useSession()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6">
          <BoomerangWordmark size="md" />
        </Link>

        <MainNav className="hidden md:flex" />
        <MobileNav className="md:hidden" />

        <div className="ml-auto flex items-center space-x-4">
          {status === 'loading' ? (
            <div className="flex items-center space-x-2">
              <div className="animate-pulse bg-gray-200 h-9 w-20 rounded"></div>
            </div>
          ) : session?.user ? (
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2 text-sm">
                <User className="h-4 w-4" />
                <span>{session.user.name || session.user.email}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/donate">Donate</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/auth/signin">Student Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}