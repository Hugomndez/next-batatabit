/** @type {import('next').NextConfig} */
const generateRobotsTxt = require('./src/utils/generate-robots-txt');
const { i18n } = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  experimental: {
    legacyBrowsers: false,
    fallbackNodePolyfills: false,
  },
  webpack(config, { isServer }) {
    if (isServer) {
      generateRobotsTxt();
    }
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
