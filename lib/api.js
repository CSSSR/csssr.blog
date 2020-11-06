import fs from 'fs'
import util from 'util'
import { join } from 'path'
import matter from 'gray-matter'
import languages from '../utils/languages'
import {
  dataByLanguagePostAndImageResize,
  dataByLanguagePostAndImageDontResize,
} from './allPostsImages'

const readdir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)

const postsDirectory = join(process.cwd(), '_posts')
const postsNewsDirectory = join(process.cwd(), '_posts/news512')

export async function getPostBySlugAndLanguage(slug, language, fields = []) {
  const fullPath = join(postsDirectory, language, `${slug}.md`)

  const fileContents = await readFile(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (field === 'images') {
      items[field] = dataByLanguagePostAndImageResize?.[language]?.[slug]
        ? {
            ...(dataByLanguagePostAndImageResize?.[language]?.[slug] ?? {}),
            ...(dataByLanguagePostAndImageDontResize?.[language]?.[slug] ?? {}),
          }
        : dataByLanguagePostAndImageResize['any-language']['any-article']
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })
  return items
}

export async function getPostsByLanguage(fields = []) {
  const postsByLanguage = await Promise.all(
    languages.map((language) =>
      readdir(join(postsDirectory, language)).then((fileNames) => {
        return Promise.all(
          fileNames
            .filter((name) => !(process.env.IS_PRODUCTION && name === 'example.md'))
            .map((name) => {
              const slug = name.replace(/\.md$/, '')
              return getPostBySlugAndLanguage(slug, language, fields)
            }),
        )
      }),
    ),
  )

  return languages.reduce((memo, language, index) => {
    return {
      ...memo,
      [language]: postsByLanguage[index],
    }
  }, {})
}

export async function getPostNewsBySlug(slug, fields = []) {
  const fullPath = join(postsNewsDirectory, `${slug}.md`)

  const fileContents = await readFile(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
    }

    if (field === 'content') {
      items[field] = content
    }

    if (field === 'images') {
      items[field] =
        dataByLanguagePostAndImageResize['news512'][slug] ||
        dataByLanguagePostAndImageResize['any-language']['any-article']
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export async function getPostsNews(fields = []) {
  const postsByLanguage = readdir(join(postsNewsDirectory)).then((fileNames) => {
    return Promise.all(
      fileNames.map((name) => {
        const slug = name.replace(/\.md$/, '')
        return getPostNewsBySlug(slug, fields)
      }),
    )
  })

  return postsByLanguage
}
