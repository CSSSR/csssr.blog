import React, { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import cn from 'classnames'

import styles from './ErrorPage.styles'
import { Grid } from '@csssr/core-design'
import Meta from '../Meta'

import ruPathRegexp from '../../utils/ruPathRegexp'
import { ReactComponent as LogoIcon } from '../../public/components/error/icons/csssr_logo.svg'
import { ReactComponent as ServerError } from '../../public/components/error/icons/serverError.svg'

import globalStyles from '../Layout/Layout.styles'

const possibleStatusCodes = [500]

const defaultStatusCode = 500

const titleLocalesByStatusCode = {
  500: {
    ru: 'Ошибка на&nbsp;сервере',
    en: 'Server Error',
  },
}

const subtitleLocalesByStatusCode = {
  500: {
    ru: 'Что-то пошло не&nbsp;так. Попробуйте еще раз или свяжитесь с&nbsp;нами по&nbsp;почте ',
    en: 'Something went wrong. Try again or&nbsp;contact&nbsp;us at&nbsp;',
  },
}

const pictureByStatusCode = {
  500: require.context('../../public/components/error/images/500'),
}

const codeIconByStatusCode = {
  500: <ServerError width="auto" height="100%" />,
}

const ErrorPage = ({ className, statusCode: statusCodeFromProps }) => {
  const route = useRouter()
  const isLanguageRu = ruPathRegexp.test(route.asPath)
  const language = isLanguageRu ? 'ru' : 'en'

  const statusCode =
    possibleStatusCodes.indexOf(statusCodeFromProps) !== -1
      ? statusCodeFromProps
      : defaultStatusCode

  return (
    <Fragment>
      <Global styles={globalStyles} />

      <Meta />

      <Grid as="header" className={className}>
        <Link href="/en">
          <a className="logo" data-testid="ErrorPage:link:logo">
            <LogoIcon width="100%" height="100%" />
          </a>
        </Link>
      </Grid>

      <Grid as="main" className={cn(className, `error-code_${statusCode}`)}>
        <h1
          className="font_h1-slab"
          dangerouslySetInnerHTML={{
            __html: `${titleLocalesByStatusCode[statusCode][language]}`,
          }}
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
              `${subtitleLocalesByStatusCode[statusCode][language]}`,
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

export default styled(ErrorPage)`
  ${styles}
`
