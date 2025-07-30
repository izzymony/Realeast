import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: [
      'i.pinimg.com', // Pinterest images
      'example.com',   // Your other domains
      // Add any other image hostnames you use
    ],
  },
};

export default nextConfig;
