import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // distDir: "build",
  images: {
    domains: ["placehold.co"],
    unoptimized: true,
  },
};

export default nextConfig;
