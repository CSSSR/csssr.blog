import React, { Fragment } from 'react'
import Link from 'next/link'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import cn from 'classnames'

import styles from './ErrorPage.styles'
import { Grid } from '@csssr/core-design'
import Meta from '../Meta'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import LogoIcon from '../../public/assets/blog/components/error/icons/csssr_logo.svg'
import LineFromTopToBottomIcon from '../../public/assets/blog/components/error/icons/lineFromTopToBottom.svg'
import NotFound from '../../public/assets/blog/components/error/icons/notFound.svg'
import ServerError from '../../public/assets/blog/components/error/icons/serverError.svg'

import navItems from '../../data/navItems'

import globalStyles from '../Layout/Layout.styles'

const possibleStatusCodes = [404, 500]

const defaultStatusCode = 500

const titleLocalesByStatusCode = {
  404: 'error:errors.notFound.title',
  500: 'error:errors.serverError.title',
}

const subtitleLocalesByStatusCode = {
  404: 'error:errors.notFound.subtitle',
  500: 'error:errors.serverError.subtitle',
}

const codeIconByStatusCode = {
  404: <NotFound width="auto" height="100%" />,
  500: <ServerError width="auto" height="100%" />,
}

class ErrorPage extends React.Component {
  renderNav = ({ lng, items: { title, id, links } }) => {
    const linkRegExp = /^(ftp|http|https):\/\/[^ "]+$/

    if (id === 'products' && lng === 'ru') return
    return (
      <span key={id}>
        <h3
          className="font_burger-menu"
          dangerouslySetInnerHTML={{ __html: this.props.title }}
        />

        {links && (
          <ul className="menu">
            {links.map(({ id, title, href }) => {
              if (id === 'express' && lng === 'ru') return

              return (
                <li key={id}>
                  {linkRegExp.test(href) ? (
                    <Link href={href}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="menu-item"
                        dangerouslySetInnerHTML={{ __html: this.props.title }}
                      />
                    </Link>
                  ) : (
                    <Link href={`/${lng}/${href}`}>
                      <a
                        className="menu-item"
                        dangerouslySetInnerHTML={{ __html: this.props.title }}
                      />
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

  render() {
    const { className, t, lng: lngCodeFromI18n, i18n } = this.props

    const statusCode =
      possibleStatusCodes.indexOf(this.props.statusCode) !== -1
        ? this.props.statusCode
        : defaultStatusCode

    return (
      <Fragment>
        <Global styles={globalStyles} />

        <Meta />

        <Grid as="header" className={className}>
          <Link href={'/en'}>
            <a className="logo">
              <LogoIcon width="100%" height="100%" />
            </a>
          </Link>
        </Grid>

        <Grid as="main" className={cn(className, `error-code_${statusCode}`)}>
          <h1
            className="font_h1-slab"
            dangerouslySetInnerHTML={{ __html: `${titleLocalesByStatusCode[statusCode]}`}}
          />

          <PictureSmart 
            className="picture"
            alt={statusCode}
            requireImages={require.context(`../../public/assets/blog/components/error/images/${statusCode}`)}
          />

          <div className={'code-wrapper'}>{codeIconByStatusCode[statusCode]}</div>

          <h2
            className="font_subhead-slab"
            dangerouslySetInnerHTML={{
              __html: [
                `${subtitleLocalesByStatusCode[statusCode]}`,
                statusCode === 500
                  ? '<a style="color: #345eff" href="mailto:sales@csssr.io">sales@csssr.io</a>'
                  : null,
              ].join(''),
            }}
          />
          {statusCode === 404 && (
            <Fragment>
              <div className="arrow-wrapper">
                <LineFromTopToBottomIcon width="100%" height="100%" />
              </div>

              <div className="navList">
                {navItems.map((items) => this.renderNav({ lng, items }))}
              </div>
            </Fragment>
          )}
        </Grid>
      </Fragment>
    )
  }
}

export default styled(ErrorPage)`
  ${styles}
`
