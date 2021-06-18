import React from 'react'

import Error404Page from '../components/error/Error404Page'
import { getPostsByLanguage } from '../lib/api'

const Custom404 = (props) => {
  return <Error404Page {...props} />
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
