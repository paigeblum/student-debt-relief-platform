import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const { pathname } = request.nextUrl

  // Protect student dashboard routes - require authentication
  if (pathname.startsWith('/dashboard/student')) {
    if (!token) {
      return NextResponse.redirect(new URL('/auth/signin?callbackUrl=' + encodeURIComponent(pathname), request.url))
    }

    // Only students can access student dashboard
    if (token.role !== 'STUDENT') {
      return NextResponse.redirect(new URL('/', request.url))
    }

    // If student hasn't completed onboarding, redirect to onboarding
    // We'll check this by seeing if they have a complete profile
    // For now, always allow access - we'll implement profile completion check later
  }

  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    if (!token || token.role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Redirect authenticated users from auth pages
  if (pathname.startsWith('/auth/') && token) {
    // For students, check if they need onboarding
    if (token.role === 'STUDENT') {
      return NextResponse.redirect(new URL('/dashboard/student', request.url))
    }
    return NextResponse.redirect(new URL('/onboarding?role=student', request.url))
  }

  // Allow all other routes (including donor flows, home page, etc.)
  return NextResponse.next()
}

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