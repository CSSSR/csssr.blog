import { Global } from '@emotion/core'
import Meta from '../meta'
import styles from './Layout.styles'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <main id="main">{children}</main>

      <Global styles={styles} />
    </>
  )
}
