const fs = require('fs')
const path = require('path')
const util = require('util')

const { SitemapStream, streamToPromise } = require('sitemap')

const languages = require('../utils/languages')

const readdir = util.promisify(fs.readdir)

const postsDirectory = path.resolve(__dirname, '../_posts')

const generateSitemap = async () => {
  const postsLinks = await Promise.all(
    languages.map((language) =>
      readdir(path.join(postsDirectory, language)).then((fileNames) => {
        return fileNames
          .filter((name) => !(process.env.IS_PRODUCTION && name === 'example.md'))
          .map((postName) => ({
            url: `https://blog.csssr.com/${language}/article/${postName.replace('.md', '')}/`,
            changefreq: 'weekly',
            priority: 0.8,
          }))
      }),
    ),
  )

  const newsLinks = await readdir(path.join(postsDirectory, 'news512')).then((fileNames) => {
    return fileNames.map((postName) => ({
      url: `https://blog.csssr.com/ru/news512/episode/${postName.replace('.md', '')}/`,
      changefreq: 'weekly',
      priority: 0.8,
    }))
  })

  const links = [
    { url: 'https://blog.csssr.com/en/', changefreq: 'weekly', priority: 1 },
    { url: 'https://blog.csssr.com/ru/', changefreq: 'weekly', priority: 1 },
    ...postsLinks.flat(),
    ...newsLinks.flat(),
  ]

  const stream = new SitemapStream({ hostname: process.env.BLOG_HOST })

  links.forEach((link) => stream.write(link))

  stream.end()

  void streamToPromise(stream).then((data) =>
    fs.writeFileSync(path.resolve(__dirname, '../out/sitemap.xml'), data.toString()),
  )
}

generateSitemap()
