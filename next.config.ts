import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        pathname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/characters',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
