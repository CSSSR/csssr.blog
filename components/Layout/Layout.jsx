import { Global } from '@emotion/core'
import Meta from '../Meta'
import styles from './Layout.styles'
import { Header, Footer } from '@csssr/core-design'

import { nav } from '../../data/footerLinks'
import { links } from '../../data/headerLinks'

export default function Layout({ children, isPost }) {
  const headerLinks = [...links]
  // Изменяем ссыку на блог если не находимся на главной блога
  headerLinks[0].href = isPost ? '/en' : ''

  return (
    <>
      <Meta />

      <Header actionButton={{ isVisible: false }} links={headerLinks} />
      <main id="main" className="main">
        {children}
      </main>
      <Footer className="footer" nav={nav} />

      <Global styles={styles} />
    </>
  )
}
