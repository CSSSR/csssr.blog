import { Global } from '@emotion/core'
import Meta from '../Meta'
import styles from './Layout.styles'
import { Header, Footer } from '@csssr/core-design'

import { nav } from '../../data/footerLinks'
import { links } from '../../data/headerLinks'

export default function Layout({ children, post }) {
  links[0].href = post ? '/' : ''

  return (
    <>
      <Meta />

      <Header actionButton={{ isVisible: false }} links={links} />
      <main id="main">{children}</main>
      <Footer className="footer" nav={nav} />

      <Global styles={styles} />
    </>
  )
}
