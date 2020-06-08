import React, { Fragment } from 'react'
import Link from 'next/link'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import cn from 'classnames'

import styles from './ErrorPage.styles'
import { Grid } from '@csssr/core-design'
import Meta from '../Meta'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import { ReactComponent as LogoIcon } from '../../public/components/error/icons/csssr_logo.svg'
import { ReactComponent as ServerError } from '../../public/components/error/icons/serverError.svg'

import globalStyles from '../Layout/Layout.styles'

const possibleStatusCodes = [500]

const defaultStatusCode = 500

const titleLocalesByStatusCode = {
  500: 'Server Error',
}

const subtitleLocalesByStatusCode = {
  500: 'Something went wrong. Try again or&nbsp;contact&nbsp;us at&nbsp;',
}

const pictureByStatusCode = {
  500: require.context('../../public/components/error/images/500')
}

const codeIconByStatusCode = {
  500: <ServerError width="auto" height="100%" />,
}

class ErrorPage extends React.Component {
  renderNav = ({ items: { title, id, links } }) => {
    const linkRegExp = /^(ftp|http|https):\/\/[^ "]+$/

    return (
      <span key={id}>
        <h3
          className="font_burger-menu"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {links && (
          <ul className="menu">
            {links.map(({ id, title, href }) => {

              return (
                <li key={id}>
                  {linkRegExp.test(href) ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="menu-item"
                        href={href}
                        dangerouslySetInnerHTML={{ __html: title }}
                      />
                  ) : (
                    <Link href={`/${href}`}>
                      <a
                        className="menu-item"
                        dangerouslySetInnerHTML={{ __html: title }}
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
    const { className } = this.props

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
            requireImages={pictureByStatusCode[statusCode]}
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
        </Grid>
      </Fragment>
    )
  }
}

export default styled(ErrorPage)`
  ${styles}
`
