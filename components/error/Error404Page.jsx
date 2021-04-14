import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Header, ErrorPage404 } from '@csssr/core-design'

import Meta from '../Meta'
import ErrorCategories from './ErrorCategories'
import ErrorPosts from './ErrorPosts'
import ErrorLeftContent from './ErrorLeftContent'

import ruPathRegexp from '../../utils/ruPathRegexp'
import getPostsCategories from '../../utils/getPostsCategories'
import { errorText } from '../../data/errorByLanguage'

import styles from './ErrorPage.styles'
import globalStyles from '../Layout/Layout.styles'

const ErrorPage = ({ className, posts }) => {
  const [language, setLanguage] = useState()

  const route = useRouter()
  const { isReady, asPath } = route

  useEffect(() => {
    if (isReady) {
      ruPathRegexp.test(asPath) ? setLanguage('ru') : setLanguage('en')
    }
  }, [isReady, asPath])

  if (!language) {
    return null
  }

  const postsToLanguage = posts[language]
  const categoriesToLanguage = getPostsCategories(postsToLanguage)

  const presetByLanguage = {
    en: 'defaultEn',
    ru: 'defaultRu',
  }

  const { title, subTitle } = errorText[language]

  return (
    <>
      <Header
        preset={presetByLanguage[language]}
        logo={{
          testId: 'Header:link.logo',
          href: `https://csssr.com/${language}`,
          type: 'default',
        }}
      />

      <Head>
        <title>{title}</title>
      </Head>

      <Global styles={globalStyles} />

      <Meta />

      <ErrorPage404
        title={title}
        subTitle={subTitle}
        className={className}
        leftContent={<ErrorLeftContent />}
      >
        <ErrorCategories items={categoriesToLanguage} language={language} />
        <ErrorPosts posts={postsToLanguage} language={language} />
      </ErrorPage404>
    </>
  )
}

export default styled(ErrorPage)`
  ${styles}
`
