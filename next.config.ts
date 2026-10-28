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
      {
        source: "/developer-documentation",
        destination: "/developers",
        permanent: true,
      },
      {
        source: "/integrations/security",
        destination: "/integration-security",
        permanent: true,
      },
      {
        source: "/integrations/identity-sso",
        destination: "/identity-and-single-sign-on",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
