import React from 'react'
import { string, number, arrayOf } from 'prop-types'
import styled from '@emotion/styled'
import Head from 'next/head'
import { Heading } from '@csssr/core-design'

import { Grid } from '../Grid'
import Layout from '../Layout'

import styles from './News.styles'

const News = ({ language, className }) => {
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
          <Heading.H1 className="title" type="regular" size="l">
            Новости 512
          </Heading.H1>
        </Grid>
      </Layout>
    </>
  )
}

News.propTypes = {
  categories: arrayOf(string),
  totalNumberOfPosts: number,
  activeCategory: string,
  activePageNumber: number,
  language: string,
  className: string,
}

export default styled(News)`
  ${styles}
`
