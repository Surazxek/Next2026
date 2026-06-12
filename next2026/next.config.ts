import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [{
      protocol: 'http',
      hostname: 'localhost',
      port: "9009",
      pathname: "/assets/**",
    },
  ],
  unoptimized: true
  }
};

export default nextConfig;
