import React, { useContext } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Global } from '@emotion/core'
import { Header, getLocaleFromUrl, PageContent } from '@csssr/csssr-shared-header'
import { DeviceContext } from '../DeviceContext'
import styled from '@emotion/styled'
import cn from 'classnames'

import styles from './ErrorPage.styles'
import { Grid } from '@csssr/core-design'
import Meta from '../Meta'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

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
  500: require.context('../../public/components/error/images/500'),
}

const codeIconByStatusCode = {
  500: <ServerError width="auto" height="100%" />,
}

const ErrorPage = ({ className, router }) => {
  const statusCode = possibleStatusCodes.indexOf(statusCode) !== -1 ? statusCode : defaultStatusCode
  const { isMobile } = useContext(DeviceContext)
  const appRootElement = typeof window === 'object' ? document.getElementById('__next') : null
  const lng = getLocaleFromUrl(router.asPath)

  return (
    <>
      <Global styles={globalStyles} />

      <Meta />

      <Header
        isMobile={isMobile}
        pathname="blog"
        lng={lng}
        NextLink={Link}
        appRootElement={appRootElement}
        jobsDomain="https://csssr.space"
      />

      <PageContent>
        <Grid as="main" className={cn(className, `error-code_${statusCode}`)}>
          <h1
            className="font_h1-slab"
            dangerouslySetInnerHTML={{ __html: `${titleLocalesByStatusCode[statusCode]}` }}
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
      </PageContent>
    </>
  )
}

export default withRouter(styled(ErrorPage)`
  ${styles}
`)
