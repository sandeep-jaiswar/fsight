import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|login).*)",
  ],
};
