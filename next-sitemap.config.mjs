/** @type {import('next-sitemap').IConfig} */

const BASE_URL = {
  production: 'https://next-batatabit.vercel.app',
  preview: `https://${process.env.VERCEL_URL}`,
  development: process.env.NEXTAUTH_URL,
}[process.env.VERCEL_ENV];

const config = {
  siteUrl: BASE_URL,
  generateIndexSitemap: false,
  generateRobotsTxt: false,
};

export default config;
