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
      try {
        items[field] = {
          ...dataByLanguagePostAndImageResize[language][slug],
          ...dataByLanguagePostAndImageDontResize[language][slug],
        }
      } catch {
        items[field] =
          dataByLanguagePostAndImageResize[language][slug] ||
          dataByLanguagePostAndImageResize['any-language']['any-article']
      }
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
