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
      return NextResponse.redirect(new URL('/', req.url))
    }

    // Role-based access control (disabled until dashboard pages are created)
    // if (isAuth && token) {
    //   const userRole = token.role as string

    //   // Admin routes
    //   if (req.nextUrl.pathname.startsWith('/admin') && userRole !== 'ADMIN') {
    //     return NextResponse.redirect(new URL('/', req.url))
    //   }
    // }

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