import Link from 'next/link'
import { Global } from '@emotion/core'
import { Footer } from '@csssr/core-design'
import { Header, getLocaleFromUrl, PageContent } from '@csssr/csssr-shared-header'
import Meta from '../Meta'
import { withRouter } from 'next/router'
import styles from './Layout.styles'
import CookiesPopup from '../CookiesPopup'
import { useContext } from 'react'
import { DeviceContext } from '../DeviceContext'

import {
  nav,
  actionPhrase,
  cookiesPolicyLink,
  privacyPolicyLink,
  addresses,
} from '../../data/footerLinks'

function Layout({ children, router, language }) {
  const languageLink = language === 'ru' ? 'en' : 'ru'
  const { isMobile } = useContext(DeviceContext)

  const appRootElement = typeof window === 'object' ? document.getElementById('__next') : null
  const lng = getLocaleFromUrl(router.asPath)

  return (
    <>
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
        <main id="main" className="main">
          {children}
        </main>

        <Footer
          className="footer"
          nav={nav[language]}
          languageLink={{ href: `/${languageLink}`, text: languageLink }}
          email="launch@csssr.com"
          actionPhrase={actionPhrase[language]}
          cookiesPolicyLink={cookiesPolicyLink[language]}
          privacyPolicyLink={language === 'en' && privacyPolicyLink[language]}
          addresses={addresses[language]}
        />
        <CookiesPopup language={language} />

        <Global styles={styles} />
      </PageContent>

      <Global styles={styles} />
    </>
  )
}

export default withRouter(Layout)
