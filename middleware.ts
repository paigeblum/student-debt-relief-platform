import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAuth = !!token
    const isAuthPage = req.nextUrl.pathname.startsWith('/auth')
    const isOnboarding = req.nextUrl.pathname.startsWith('/onboarding')

    // Redirect to login if trying to access protected routes without auth
    if (!isAuth && !isAuthPage && !isOnboarding) {
      if (req.nextUrl.pathname.startsWith('/dashboard') ||
          req.nextUrl.pathname.startsWith('/admin') ||
          req.nextUrl.pathname.startsWith('/profile') ||
          req.nextUrl.pathname.startsWith('/settings')) {
        return NextResponse.redirect(new URL('/auth/signin', req.url))
      }
    }

    // Redirect away from auth pages if already authenticated
    if (isAuth && isAuthPage) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    // Role-based access control
    if (isAuth && token) {
      const userRole = token.role as string

      // Admin routes
      if (req.nextUrl.pathname.startsWith('/admin') && userRole !== 'ADMIN') {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }

      // Student dashboard
      if (req.nextUrl.pathname.startsWith('/dashboard/student') && userRole !== 'STUDENT') {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }

      // Donor dashboard
      if (req.nextUrl.pathname.startsWith('/dashboard/donor') && userRole !== 'DONOR') {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }

      // Redirect to appropriate dashboard based on role
      if (req.nextUrl.pathname === '/dashboard') {
        switch (userRole) {
          case 'ADMIN':
            return NextResponse.redirect(new URL('/admin', req.url))
          case 'STUDENT':
            return NextResponse.redirect(new URL('/dashboard/student', req.url))
          case 'DONOR':
            return NextResponse.redirect(new URL('/dashboard/donor', req.url))
        }
      }
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // Allow access to public routes and auth pages
        return true
      },
    },
  }
)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}