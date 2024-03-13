import {createMiddlewareClient} from "@supabase/auth-helpers-nextjs"
import {NextResponse} from "next/server";
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router';

import type {NextRequest} from "next/server"

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  url.pathname = '/login'
  const pathname = req.nextUrl.pathname;
  
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({req,res});
  const { data: { session } } = await supabase.auth.getSession();

  console.log(url.pathname)
  if (!session && url.pathname != '/login') {
    // Redirect to the login page
    return NextResponse.redirect(new URL('/login', req.url));
  }
  await supabase.auth.getSession();//refreshes session if expired
  console.log(pathname)

  return res;//returns updated cookie w/ fresh session from supabase
}
