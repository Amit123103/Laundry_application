import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@laundry24/firebase", "@laundry24/shared", "@laundry24/ui"],
  output: "standalone",
};

export default nextConfig;
