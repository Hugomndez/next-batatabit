/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: process.env.NEXTAUTH_URL || `https://${process.env.VERCEL_URL}`,
  generateIndexSitemap: false,
  generateRobotsTxt: false,
};

export default config;
