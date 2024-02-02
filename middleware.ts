import {NextResponse} from "next/server";

const isLoggedIn: boolean = false;

export function middleware(request: Request) {
  if (isLoggedIn) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next()
}

