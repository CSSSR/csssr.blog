import { Global } from '@emotion/core'
import Meta from '../Meta'
import styles from './Layout.styles'
import { Header, Footer } from '@csssr/core-design'

import { nav } from '../../data/footerLinks'
import { links } from '../../data/headerLinks'

export default function Layout({ children, language }) {
  const headerLinks = [...links]
  headerLinks[0].href = `/${language}`

  return (
    <>
      <Meta />

      <Header actionButton={{ isVisible: false }} links={headerLinks} />
      <main id="main" className="main">
        {children}
      </main>
      <Footer
        className="footer"
        nav={nav}
        languageLink={{ href: '/ru', text: 'ru' }}
        email="launch@csssr.com"
      />

      <Global styles={styles} />
    </>
  )
}
