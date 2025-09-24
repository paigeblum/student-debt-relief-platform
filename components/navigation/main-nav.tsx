'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface MainNavProps {
  className?: string
}

export function MainNav({ className }: MainNavProps) {
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
    <nav className={cn("flex items-center space-x-6 lg:space-x-8", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === route.href
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}