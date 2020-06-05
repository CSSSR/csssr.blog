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
import { ReactComponent as LineFromTopToBottomIcon } from '../../public/components/error/icons/lineFromTopToBottom.svg'
import { ReactComponent as NotFound } from '../../public/components/error/icons/notFound.svg'

import navItems from '../../data/navItems'

import globalStyles from '../Layout/Layout.styles'

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

    return (
      <Fragment>
        <Global styles={globalStyles} />

        <Meta />

        <Grid as="header" className={className}>
          <a className="logo" href="https://csssr.com/en">
            <LogoIcon width="100%" height="100%" />
          </a>
        </Grid>

        <Grid as="main" className={cn(className, `error-code_404`)}>
          <h1
            className="font_h1-slab"
            dangerouslySetInnerHTML={{ __html: 'Not found'}}
          />

          <PictureSmart
            className="picture"
            alt="404"
            requireImages={require.context('../../public/components/error/images/404')}
          />

          <div className={'code-wrapper'}>
            <NotFound width="auto" height="100%" />
          </div>

          <h2
            className="font_subhead-slab"
            dangerouslySetInnerHTML={{ __html: 'Explore other pages'}}
          />
          <Fragment>
            <div className="arrow-wrapper">
              <LineFromTopToBottomIcon width="100%" height="100%" />
            </div>

            <div className="navList">
              {navItems.map((items) => this.renderNav({ items }))}
            </div>
          </Fragment>
        </Grid>
      </Fragment>
    )
  }
}

export default styled(ErrorPage)`
  ${styles}
`
