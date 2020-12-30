import React from 'react'
import { string, number, arrayOf, shape } from 'prop-types'
import styled from '@emotion/styled'
import Head from 'next/head'
import { Heading } from '@csssr/core-design'

import Layout from '../../Layout'
import { Grid } from '../../Grid'
import Categories from '../../main/Categories'
import Pagination from '../../main/Pagination'
import NewsList from './NewsList'

import { NEWS_PER_PAGE } from '../../../data/constants'

import styles from './News.styles'

const News = ({
  className,
  categories,
  posts,
  activePageNumber,
  totalNumberOfPosts,
  lastPostDate,
}) => {
  return (
    <>
      <Head>
        {/* TODO: Указать правильные мета данные */}
        <title>Новости 512 | CSSSR</title>
        <meta name="description" content="news" />
        <meta property="og:url" content={`https://blog.csssr.com/ru/news512/`} />
        <meta property="og:title" content="Новости 512 | CSSS" />
        <meta property="og:description" content="news" />
        <meta property="og:image" content="" />
      </Head>

      <Layout language="ru">
        <Categories items={categories} language="ru" activeCategory="news512" />

        <Grid className={className}>
          <Heading.H1 className="title" type="regular" size="l">
            Новости 512
          </Heading.H1>

          <div className="news-info">
            <span className="autor">Ислам Виндижев</span>
            <span className="tag">новости</span>
          </div>

          <NewsList posts={posts} lastPostDate={lastPostDate} className="news-list" />
        </Grid>

        <Pagination
          language="ru"
          activeCategory="news512"
          activePageNumber={activePageNumber}
          totalNumberOfPosts={totalNumberOfPosts}
          postsPerPage={NEWS_PER_PAGE}
        />
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
      episodeNumber: number,
    }),
  ),
  categories: arrayOf(string),
  totalNumberOfPosts: number,
  activePageNumber: number,
  lastPostDate: string,
  className: string,
}

export default styled(News)`
  ${styles}
`
