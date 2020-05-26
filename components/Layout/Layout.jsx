import { Global } from '@emotion/core'
import Meta from '../Meta'
import styles from './Layout.styles'
import { Header, Footer } from '@csssr/core-design'

export default function Layout({ children }) {
  return (
    <>
      <Meta />

      <Header actionButton={{ isVisible: false }} />
      <main id="main">{children}</main>
      <Footer className="footer" />

      <Global styles={styles} />
    </>
  )
}
