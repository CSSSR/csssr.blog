import { Global } from '@emotion/core'
import Meta from '../Meta'
import styles from './Layout.styles'
import { Header, Footer } from '@csssr/core-design'

import {
  nav,
  actionPhrase,
  cookiesPolicyLink,
  privacyPolicyLink,
  addresses,
} from '../../data/footerLinks'
import { links, menu } from '../../data/headerLinks'

export default function Layout({ children, language }) {
  const languageLink = language === 'ru' ? 'en' : 'ru'

  return (
    <>
      <Meta />

      <Header
        actionButton={{ isVisible: false }}
        links={links[language]}
        menu={{ links: menu[language] }}
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

      <Global styles={styles} />
    </>
  )
}
