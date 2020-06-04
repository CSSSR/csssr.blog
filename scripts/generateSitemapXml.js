const fs = require('fs')
const path = require('path')

const { SitemapStream, streamToPromise } = require('sitemap')

const links = [
  { url: '/en', changefreq: 'weekly', priority: 1 },
  ...fs
    .readdirSync(path.resolve(__dirname, '../_posts'))
    .map((postName) => postName.replace('.md', ''))
    .filter((slug) => {
      return !(process.env.IS_PRODUCTION === 'TRUE' && slug === 'example')
    })
    .map((slug) => ({
      url: `/en/posts/${slug}`,
      changefreq: 'weekly',
      priority: 0.8,
    })),
]

const stream = new SitemapStream({ hostname: 'https://blog.csssr.com/' })

links.forEach((link) => stream.write(link))

stream.end()

streamToPromise(stream).then((data) =>
  fs.writeFileSync(path.resolve(__dirname, '../out/sitemap.xml'), data.toString()),
)
