import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  turbopack: {
    root: "./", // points to your project folder
  },
};



export default nextConfig;
