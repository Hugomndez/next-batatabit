const fs = require('fs');

const crawlableRobotsTxt = `User-agent: *\nAllow: /\n\nSitemap: https://next-batatabit.vercel.app/sitemap.xml`;

const uncrawlableRobotsTxt = `User-agent: *\nDisallow: /`;

function generateRobotsTxt() {
  const robotsTxt =
    process.env.VERCEL_ENV === 'production'
      ? crawlableRobotsTxt
      : uncrawlableRobotsTxt;

  fs.writeFileSync('public/robots.txt', robotsTxt);

  console.log(
    `Generated a ${
      process.env.VERCEL_ENV === 'production' ? 'crawlable' : 'non-crawlable'
    } robots.txt`
  );
}

module.exports = generateRobotsTxt;
