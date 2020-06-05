const fs = require('fs')
const path = require('path')

const robotsTxtContent =
  process.env.IS_PRODUCTION === 'TRUE'
    ? `User-agent: *
Sitemap: https://blog.csssr.com/sitemap.xml`
    : `User-agent: *
Disallow: /
Sitemap: https://blog.csssr.com/sitemap.xml`

fs.writeFileSync(path.resolve(__dirname, '../out/robots.txt'), robotsTxtContent)