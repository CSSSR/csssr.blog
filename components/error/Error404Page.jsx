import { Grid } from '@csssr/core-design'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import cn from 'classnames'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

import { navItemsEn, navItemsRu } from '../../data/navItems'
import { ReactComponent as LogoIcon } from '../../public/components/error/icons/csssr_logo.svg'
import { ReactComponent as LineFromTopToBottomIcon } from '../../public/components/error/icons/lineFromTopToBottom.svg'
import { ReactComponent as NotFound } from '../../public/components/error/icons/notFound.svg'
import ruPathRegexp from '../../utils/ruPathRegexp'
import globalStyles from '../Layout/Layout.styles'
import Meta from '../Meta'

import styles from './ErrorPage.styles'

const ErrorPage = ({ className }) => {
  const route = useRouter()
  const isLanguageRu = ruPathRegexp.test(route.asPath)
  const dynamicNavItems = isLanguageRu ? navItemsRu : navItemsEn

  const renderNav = ({ items: { title, id, links } }) => {
    const linkRegExp = /^(?:ftp|http|https):\/\/[^ "]+$/

    return (
      <span key={id}>
        <h3 className="font_burger-menu">{title}</h3>

        {links && (
          <ul className="menu">
            {links.map(({ id: linkId, title: linkTitle, href }) => {
              const testId = `ErrorPage:link:${linkId}`
              return (
                <li key={linkId}>
                  {linkRegExp.test(href) ? (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu-item"
                      href={href}
                      data-testid={testId}
                    >
                      {linkTitle}
                    </a>
                  ) : (
                    <Link href={`/${href}`}>
                      <a className="menu-item" data-testid={testId}>
                        {linkTitle}
                      </a>
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </span>
    )
  }

  const text404 = isLanguageRu ? 'Страница не найдена' : 'Not found'

  return (
    <>
      <Global styles={globalStyles} />

      <Meta />

      <Head>
        <title>{text404}</title>
      </Head>

      <Grid as="header" className={className}>
        <a className="logo" href="https://csssr.com/en" data-testid="Logo:link">
          <LogoIcon width="100%" height="100%" />
        </a>
      </Grid>

      <Grid as="main" className={cn(className, `error-code_404`)}>
        <h1 className="font_h1-slab">{text404}</h1>

        <PictureSmart
          className="picture"
          alt="404"
          requireImages={require.context('../../public/components/error/images/404')}
        />

        <div className={'code-wrapper'}>
          <NotFound width="auto" height="100%" />
        </div>

        <h2 className="font_subhead-slab">
          {isLanguageRu ? 'Изучите наши разделы' : 'Explore other pages'}
        </h2>
        <>
          <div className="arrow-wrapper">
            <LineFromTopToBottomIcon width="100%" height="100%" />
          </div>

          <div className="navList">{dynamicNavItems.map((items) => renderNav({ items }))}</div>
        </>
      </Grid>
    </>
  )
}

export default styled(ErrorPage)`
  ${styles}
`
