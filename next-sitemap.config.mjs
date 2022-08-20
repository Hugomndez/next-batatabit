/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXTAUTH_URL,
  generateIndexSitemap: false,
  generateRobotsTxt: false,
};

export default config;
