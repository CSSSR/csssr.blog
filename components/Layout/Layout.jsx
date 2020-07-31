import { Global } from '@emotion/core'
import Meta from '../Meta'
import styles from './Layout.styles'
import { Header, Footer } from '@csssr/core-design'

import { nav } from '../../data/footerLinks'
import { actionPhrase, cookiesPolicyLink, privacyPolicyLink, addresses } from '../../data/footer'
import { links } from '../../data/headerLinks'

export default function Layout({ children, language }) {
  const headerLinks = [...links]
  headerLinks[0].href = `/${language}`
  const languageLink = language === 'ru' ? 'en' : 'ru'

  return (
    <>
      <Meta />

      <Header actionButton={{ isVisible: false }} links={headerLinks} />
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
