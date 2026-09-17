import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/blog/why-global-businesses-need-hr-management-platform",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
