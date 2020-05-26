import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { getPictureData } from '@csssr/csssr.images'
const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

const requireAllPostsImages = require.context('../public/assets/blog', true)

const allPostsImages = requireAllPostsImages.keys().reduce((acc, key) => {
  const {
    groups: { slug, imageName },
  } = key.match(/^\.\/(?<slug>.+?)\/(?<imageName>.+?)\/.+/)

  if (!acc[slug]) {
    acc[slug] = {}
  }

  if (!acc[slug][imageName]) {
    acc[slug][imageName] = []
  }

  acc[slug][imageName].push(requireAllPostsImages(key))

  return acc
}, {})

const dataByPostAndImage = Object.keys(allPostsImages).reduce((memo1, slugPost) => {
  memo1[slugPost] = Object.keys(allPostsImages[slugPost]).reduce((memo2, imageName) => {
    memo2[imageName] = getPictureData(allPostsImages[slugPost][imageName])

    return memo2
  }, {})

  return memo1
}, {})

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (field === 'images') {
      items[field] = dataByPostAndImage[realSlug]
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  return slugs.map((slug) => getPostBySlug(slug, fields))
}
