import React from 'react'

import Error404Page from '../components/error/Error404Page'
import { getPostsByLanguage } from '../lib/api'
import languages from '../utils/languages'

class Custom404 extends React.Component {
  render() {
    return <Error404Page {...this.props} />
  }
}

export default Custom404

export async function getStaticProps() {
  const posts = await getPostsByLanguage([
    'title',
    'date',
    'slug',
    'author',
    'coverImageAlt',
    'tag',
    'images',
  ])

  return {
    props: {
      posts,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: languages.map((language) => ({
      params: {
        language,
      },
    })),
    fallback: false,
  }
}
