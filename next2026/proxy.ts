import { NextRequest, NextResponse } from "next/server";
import axiosInstance from "./lib/config/apiClient";

export const config = {
  matcher: ["/cms/:path*"],
};

export async function proxy(req: NextRequest) {
  const token = req.cookies.get("_nxt_at_60")?.value;

  if (!token) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }

  try {
    const response = await axiosInstance.get(
      "/auth/me",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    // const user = response.data.data;

    // if (user.role !== "admin") {
    //   return NextResponse.redirect(
    //     new URL("/user", req.url)
    //   );
    // }

    return NextResponse.next();

  } catch (exception) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }
}