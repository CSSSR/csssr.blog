import { Global } from '@emotion/core'
import Meta from '../Meta'
import styles from './Layout.styles'
import { Header, Footer } from '@csssr/core-design'
import { nav } from '../../data/footerLinks'

export default function Layout({ children }) {
  return (
    <>
      <Meta />

      <Header actionButton={{ isVisible: false }} />
      <main id="main">{children}</main>
      <Footer className="footer" nav={nav} />

      <Global styles={styles} />
    </>
  )
}
