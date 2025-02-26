import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
  },
  experimental: {
    turbo: {
      rules: {
        // Конфигурация для Turbopack
        '**/*.{js,jsx,ts,tsx}': {
          loader: 'swc',
        },
      },
    },
  },
};

module.exports = nextConfig;