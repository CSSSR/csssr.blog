import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import cn from 'classnames'
import { useRouter } from 'next/router'

import styles from './ErrorPage.styles'
import { Grid } from '@csssr/core-design'
import Meta from '../Meta'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import { ReactComponent as LogoIcon } from '../../public/components/error/icons/csssr_logo.svg'
import { ReactComponent as LineFromTopToBottomIcon } from '../../public/components/error/icons/lineFromTopToBottom.svg'
import { ReactComponent as NotFound } from '../../public/components/error/icons/notFound.svg'

import { navItemsEn, navItemsRu } from '../../data/navItems'

import globalStyles from '../Layout/Layout.styles'

const ErrorPage = ({ className }) => {
  const route = useRouter()
  const isLanguageRu = route.asPath.includes('/ru') || route.asPath === '/r'
  const dynamicNavItems = isLanguageRu ? navItemsRu : navItemsEn

  const renderNav = ({ items: { title, id, links } }) => {
    const linkRegExp = /^(ftp|http|https):\/\/[^ "]+$/

    return (
      <span key={id}>
        <h3 className="font_burger-menu">{title}</h3>

        {links && (
          <ul className="menu">
            {links.map(({ id, title, href }) => {
              return (
                <li key={id}>
                  {linkRegExp.test(href) ? (
                    <a target="_blank" rel="noopener noreferrer" className="menu-item" href={href}>
                      {title}
                    </a>
                  ) : (
                    <Link href={`/${href}`}>
                      <a className="menu-item">{title}</a>
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
        <a className="logo" href="https://csssr.com/en">
          <LogoIcon width="100%" height="100%" />
        </a>
      </Grid>

      <Grid as="main" className={cn(className, `error-code_404`)}>
        <h1 className="font_h1-slab">{text404}</h1>
        <span>OLD EVA</span>

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
        <Fragment>
          <div className="arrow-wrapper">
            <LineFromTopToBottomIcon width="100%" height="100%" />
          </div>

          <div className="navList">{dynamicNavItems.map((items) => renderNav({ items }))}</div>
        </Fragment>
      </Grid>
    </>
  )
}

export default styled(ErrorPage)`
  ${styles}
`
