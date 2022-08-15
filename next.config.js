/** @type {import('next').NextConfig} */
const generateRobotsTxt = require('./src/utils/generate-robots-txt');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'es-MX'],
    defaultLocale: 'en-US',
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
    optimizeCss: true,
  },
  webpack(config, { isServer }) {
    if (isServer) {
      generateRobotsTxt();
    }
    return config;
  },
};

module.exports = nextConfig;
