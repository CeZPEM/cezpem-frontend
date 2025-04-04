import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // distDir: "build",
  images: {
    domains: ["placehold.co"],
    unoptimized: true,
  },
};

export default nextConfig;
