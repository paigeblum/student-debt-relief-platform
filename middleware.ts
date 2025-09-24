import { NextResponse } from "next/server"
import { NextRequest } from "next/server"

export default function middleware(request: NextRequest) {
  // Temporarily disabled to avoid redirect loops while Google OAuth is being activated
  // This middleware will be re-enabled once authentication is fully working

  // For now, allow all routes to be accessed
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