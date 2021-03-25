import React from 'react'
import { Global } from '@emotion/react'
import Meta from '../Meta'
import styles from './Layout.styles'
import { Header, Footer } from '@csssr/core-design'
import { CookiesPopup } from '@csssr/core-design'

const presetByLanguage = {
  en: 'defaultEn',
  ru: 'defaultRu',
}

export default function Layout({ children, language, type }) {
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
