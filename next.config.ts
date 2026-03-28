import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // to show person in speaking without bot 
   images: {
      remotePatterns: [ // the progile image stored in clerk
          { hostname: 'img.clerk.com'}
      ]
  }
};

export default nextConfig;