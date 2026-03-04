import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.qwenlm.ai",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "leanotion-shop.fourthwall.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.fourthwall.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
