import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/blog/why-global-businesses-need-hr-management-platform",
        permanent: true,
      },
      {
        source: "/developer-documentation",
        destination: "/developers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
