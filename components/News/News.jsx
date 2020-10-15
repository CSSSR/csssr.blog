import React from 'react'
import { string, number, arrayOf, shape } from 'prop-types'
import styled from '@emotion/styled'
import Head from 'next/head'
import { Heading } from '@csssr/core-design'

import { Grid } from '../Grid'
import Layout from '../Layout'
import Categories from '../main/Categories'

import styles from './News.styles'

const News = ({ language, className, categories, posts }) => {
  return (
    <>
      <Head>
        {/* TODO: Указать правильные мета данные */}
        <title>Новости 512 | CSSSR</title>
        <meta name="description" content="news" />
        <meta property="og:url" content={`https://blog.csssr.com/${language}/news512/`} />
        <meta property="og:title" content="Новости 512 | CSSS" />
        <meta property="og:description" content="news" />
        <meta property="og:image" content="" />
      </Head>

      <Layout language={language}>
        <Grid className={className}>
          <Categories
            items={categories}
            language={language}
            activeCategory="news"
            className="categories"
          />

          <Heading.H1 className="title" type="regular" size="l">
            Новости 512
          </Heading.H1>

          {posts.map((post) => post.title)}
        </Grid>
      </Layout>
    </>
  )
}

News.propTypes = {
  posts: arrayOf(
    shape({
      title: string,
      slug: string,
      date: string,
      tag: string,
    }),
  ),
  categories: arrayOf(string),
  totalNumberOfPosts: number,
  activePageNumber: number,
  language: string,
  className: string,
}

export default styled(News)`
  ${styles}
`
