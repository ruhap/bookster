import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

import { NextResponse } from "next/server";
import { getServerAuthStatus } from "./lib/session";

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req });
    const isAuth = !!token;

    if (!isAuth) {
      return NextResponse.redirect("/");
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"],
};
