import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// TODO: Remove this based on resolution for https://github.com/vercel/next.js/issues/35185
export function middleware(req: NextRequest) {
  // Only execute for specific pathnames if running this needs to run for at "/pages" to avoid running for all requests
  if (req.method === 'POST' && req.nextUrl.pathname === '/') {
    // Redirect to the correct static page using semantic 303
    // ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303
    return NextResponse.redirect(req.nextUrl.clone(), 303);
  }
}
