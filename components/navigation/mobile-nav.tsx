'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  className?: string
}

export function MobileNav({ className }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()
  const pathname = usePathname()

  const publicRoutes = [
    { href: '/students', label: 'For Students' },
    { href: '/donors', label: 'For Donors' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/about', label: 'About' },
  ]

  const studentRoutes = [
    { href: '/dashboard/student', label: 'Dashboard' },
    { href: '/profile', label: 'My Profile' },
  ]

  const donorRoutes = [
    { href: '/dashboard/donor', label: 'Dashboard' },
    { href: '/students', label: 'Browse Students' },
    { href: '/donate', label: 'Donate' },
  ]

  const adminRoutes = [
    { href: '/admin', label: 'Admin Dashboard' },
    { href: '/admin/students', label: 'Verify Students' },
    { href: '/admin/donations', label: 'Manage Donations' },
  ]

  const getRoutes = () => {
    if (!session?.user) return publicRoutes

    switch (session.user.role) {
      case 'ADMIN':
        return adminRoutes
      case 'STUDENT':
        return studentRoutes
      case 'DONOR':
        return donorRoutes
      default:
        return publicRoutes
    }
  }

  const routes = getRoutes()

  return (
    <div className={cn("flex items-center", className)}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] w-full grid-flow-row auto-rows-max overflow-auto p-6 pb-32 animate-in slide-in-from-bottom-80 md:hidden">
          <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
            <nav className="grid grid-flow-row auto-rows-max text-sm">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                    pathname === route.href ? "text-foreground" : "text-foreground/60"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
            </nav>

            {!session?.user && (
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <Button variant="ghost" asChild>
                  <Link href="/auth/signin" onClick={() => setIsOpen(false)}>
                    Sign In
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}