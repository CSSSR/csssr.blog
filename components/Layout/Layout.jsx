import { CookiesPopup, Footer, Header } from '@csssr/core-design'
import { Global } from '@emotion/react'
import React from 'react'

import Meta from '../Meta'

import styles from './Layout.styles'

const presetByLanguage = {
  en: 'defaultEn',
  ru: 'defaultRu',
}

const Layout = ({ children, language, type }) => {
  return (
    <>
      <Meta type={type} />

      <Header
        preset={presetByLanguage[language]}
        logo={{
          testId: 'Header:link.logo',
          href: `https://csssr.com/${language}`,
          type: 'default',
        }}
      />
      <main id="main" className="main" data-testid="Layout:block:main">
        {children}
      </main>

      <Footer
        className="footer"
        preset={presetByLanguage[language]}
        language={language}
        type={type}
      />

      <CookiesPopup preset={presetByLanguage[language]} />

      <Global styles={styles} />
    </>
  )
}

export default Layout
