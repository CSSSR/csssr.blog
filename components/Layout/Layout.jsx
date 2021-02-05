import { Global } from '@emotion/react'
import Meta from '../Meta'
import styles from './Layout.styles'
import { Header, Footer } from '@csssr/core-design'
import CookiesPopup from '../CookiesPopup'

import {
  nav,
  actionPhrase,
  cookiesPolicyLink,
  privacyPolicyLink,
  addresses,
} from '../../data/footerLinks'
import { links, menu } from '../../data/headerLinks'

export default function Layout({ children, language, type }) {
  const languageLink = language === 'ru' ? 'en' : 'ru'

  return (
    <>
      <Meta type={type} />

      <Header
        actionButton={{ isVisible: false }}
        links={links[language]}
        menu={{ links: menu[language] }}
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
    </>
  )
}
