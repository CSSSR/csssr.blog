import React from 'react'
import { string, number, arrayOf, shape } from 'prop-types'
import styled from '@emotion/styled'
import Head from 'next/head'
import { Heading } from '@csssr/core-design'

import { Grid } from '../../Grid'
import Layout from '../../Layout'
import Categories from '../../main/Categories'
import Pagination from '../../main/Pagination'
import DateFormatter from '../../DateFormatter'
import NavList from './NewsList'

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
        <Grid className={className}>
          <Categories
            items={categories}
            language="ru"
            activeCategory="news512"
            className="categories"
          />

          <Heading.H1 className="title" type="regular" size="l">
            Новости 512
          </Heading.H1>

          <div className="news-info">
            <span className="autor">Ислам Виндижев</span>
            <DateFormatter language="ru">{lastPostDate}</DateFormatter>
            <span className="tag">новости</span>
          </div>
        </Grid>

        <NavList posts={posts} lastPostDate={lastPostDate} className="nav-list" />

        <Pagination
          language="ru"
          activeCategory="news512"
          activePageNumber={activePageNumber}
          totalNumberOfPosts={totalNumberOfPosts}
          isNews
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
