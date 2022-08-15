/** @type {import('next').NextConfig} */
const generateRobotsTxt = require('./src/utils/generate-robots-txt');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
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
