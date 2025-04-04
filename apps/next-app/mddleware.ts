import { type NextRequest, NextResponse } from 'next/server'
import { verifyAuth } from './src/utils/auth-utils/auth'

export const config = {
  matcher: ['/api/protected', '/protected'],
}

// JWT Authentication with Vercel's Edge Middleware
// https://edge-functions-jwt-authentication.vercel.app/
// From: https://github.com/vercel/examples/blob/main/edge-middleware/jwt-authentication/middleware.ts
export async function middleware(req: NextRequest) {
  // validate the user is authenticated
  const verifiedToken = await verifyAuth(req).catch((err) => {
    console.error(err.message)
  })

  if (!verifiedToken) {
    // if this an API request, respond with JSON
    if (req.nextUrl.pathname.startsWith('/api/')) {
      return new NextResponse(
        JSON.stringify({ error: { message: 'authentication required' } }),
        { status: 401 }
      )
    }
    // otherwise, redirect to the set token page
    else {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }
}
