const fs = require('fs');

const crawlableRobotsTxt = `User-agent: *\nAllow: /`;

const uncrawlableRobotsTxt = `User-agent: *\nDisallow: /`;

function generateRobotsTxt() {
  // Create a non-crawlable robots.txt in non-production environments
  const robotsTxt =
    process.env.VERCEL_ENV === 'production'
      ? crawlableRobotsTxt
      : uncrawlableRobotsTxt;

  // Create robots.txt file
  fs.writeFileSync('public/robots.txt', robotsTxt);

  console.log(
    `Generated a ${
      process.env.VERCEL_ENV === 'production' ? 'crawlable' : 'non-crawlable'
    } public/robots.txt`
  );
}

module.exports = generateRobotsTxt;
