import { Heading } from '@csssr/core-design'
import { getOriginal } from '@csssr/csssr.images/dist/utils'
import styled from '@emotion/styled'
import Head from 'next/head'
import { arrayOf, number, shape, string } from 'prop-types'
import React from 'react'

import { NEWS_PER_PAGE } from '../../../data/constants'
import ogImages from '../../../public/images/og/news512/all.png'
import { Grid } from '../../Grid'
import Layout from '../../Layout'
import Categories from '../../main/Categories'
import Pagination from '../../main/Pagination'

import styles from './News.styles'
import NewsList from './NewsList'

const ogImage = getOriginal(ogImages)

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
        <meta
          name="description"
          content="Новости 512 — короткометражные выпуски новостей о технологиях и индустрии веба."
        />

        <meta property="og:title" content="Новости 512 | CSSSR" />
        <meta
          property="og:description"
          content="Новости 512 — короткометражные выпуски новостей о технологиях и индустрии веба."
        />
        <meta property="og:url" content="https://blog.csssr.com/ru/news512/" />

        <meta name="twitter:image" content={ogImage} />
        <meta property="og:image" content={ogImage} />
      </Head>

      <Layout language="ru" type="news">
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
