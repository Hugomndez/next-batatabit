/** @type {import('next').NextConfig} */
const generateRobotsTxt = require('./src/utils/generate-robots-txt');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
