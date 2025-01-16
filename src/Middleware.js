import { NextResponse } from 'next/server';
import { getAuth } from 'firebase/auth';

export async function middleware(req) {
  const token = req.cookies.get('token');

  // If token doesn't exist, redirect to login
  if (!token) {
    return NextResponse.redirect('/login');
  }

  const auth = getAuth();
  
  try {
    // Verify token and get user (server-side)
    await auth.verifyIdToken(token); // Implement server-side token verification if needed
  } catch (error) {
    return NextResponse.redirect('/login');
  }

  const role_from_cookie = req.cookies.get('Role');  // Fetch the role from cookies

  // Protect adminPage from user role
  if (req.nextUrl.pathname.startsWith('/adminPage') && role_from_cookie !== 'admin') {
    return NextResponse.redirect('/unauthorized');
  }

  return NextResponse.next();
}

// Apply middleware only to the admin page
export const config = {
  matcher: ['/adminPage/:path*'],  // Protect all adminPage routes
};
