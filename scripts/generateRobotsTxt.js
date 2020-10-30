const fs = require('fs')
const path = require('path')

const robotsTxtContent =
  process.env.IS_PRODUCTION === 'TRUE'
    ? `User-agent: *
Sitemap: ${process.env.BLOG_HOST}/sitemap.xml`
    : `User-agent: *
Disallow: /
Sitemap: ${process.env.BLOG_HOST}/sitemap.xml`

fs.writeFileSync(path.resolve(__dirname, '../out/robots.txt'), robotsTxtContent)
