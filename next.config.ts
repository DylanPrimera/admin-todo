import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailus.io",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol:'https',
        hostname:'avatars.githubusercontent.com'
      }
      
    ],
  },
};

export default nextConfig;
