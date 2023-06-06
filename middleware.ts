import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/api/:path*",
};

export function middleware(request: NextRequest) {
  const secret = request.headers.get("access-token") || "";
  if (secret !== process.env.API_SECRET) {
    return NextResponse.json({
      status: 401,
      message: "Unauthorized. Incorrect API Secret",
    });
  }
}
