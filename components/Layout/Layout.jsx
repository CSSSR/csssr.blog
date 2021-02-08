import { Global } from '@emotion/react'
import Meta from '../Meta'
import styles from './Layout.styles'
import { Header, Footer } from '@csssr/core-design'
import CookiesPopup from '../CookiesPopup'

import { actionPhrase, addresses } from '../../data/footerLinks'

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
      <main id="main" className="main">
        {children}
      </main>

      <Footer
        className="footer"
        preset={presetByLanguage[language]}
        email="launch@csssr.com"
        actionPhrase={actionPhrase[language]}
        addresses={addresses[language]}
      />

      <CookiesPopup language={language} />

      <Global styles={styles} />
    </>
  )
}
