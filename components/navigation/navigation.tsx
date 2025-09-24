'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'
import { BoomerangWordmark } from '@/components/ui/boomerang-logo'

export function Navigation() {
  // Temporarily simplified navigation until authentication is fully configured
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6">
          <BoomerangWordmark size="md" />
        </Link>

        <MainNav className="hidden md:flex" />
        <MobileNav className="md:hidden" />

        <div className="ml-auto flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}