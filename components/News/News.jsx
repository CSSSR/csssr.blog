import React from 'react'
import { string, number, arrayOf, shape } from 'prop-types'
import styled from '@emotion/styled'
import Head from 'next/head'
import { Heading } from '@csssr/core-design'

import { Grid } from '../Grid'
import Layout from '../Layout'
import Categories from '../main/Categories'
import Pagination from '../main/Pagination'
import NavList from './NewsList'
import DateFormatter from '../DateFormatter'

import styles from './News.styles'

const News = ({ language, className, categories, posts, activePageNumber, totalNumberOfPosts }) => {
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
            activeCategory="news512"
            className="categories"
          />

          <Heading.H1 className="title" type="regular" size="l">
            Новости 512
          </Heading.H1>

          <div className="news-info">
            <span className="autor">Ислам Виндижев</span>
            <DateFormatter language="ru">2020-07-14T00:00:00.000Z</DateFormatter>
            <span className="tag">новости</span>
          </div>
        </Grid>

        <NavList posts={posts} className="nav-list" />

        <Pagination
          language={language}
          activeCategory="news512"
          activePageNumber={activePageNumber}
          totalNumberOfPosts={totalNumberOfPosts}
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
      number: number,
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
