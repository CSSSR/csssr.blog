import { Global } from '@emotion/core'

import Alert from '../alert'
import Meta from '../meta'
import styles from './Layout.styles'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Global styles={styles} />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
    </>
  )
}
