/** @type {import('next-sitemap').IConfig} */

const BASE_URL =
  process.env.NODE_ENV !== 'production'
    ? process.env.NEXTAUTH_URL
    : `https://${process.env.VERCEL_URL}`;

const config = {
  siteUrl: BASE_URL,
  generateIndexSitemap: false,
  generateRobotsTxt: false,
};

export default config;
