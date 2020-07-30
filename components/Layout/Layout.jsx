import Link from 'next/link'
import { Global } from '@emotion/core'
import { Footer } from '@csssr/core-design'
import { Header, getLocaleFromUrl, PageContent, theme } from '@csssr/csssr-shared-header'
import Meta from '../Meta'
import { withRouter } from 'next/router'
import styles from './Layout.styles'
import { nav } from '../../data/footerLinks'
import { ThemeProvider } from 'emotion-theming'

function Layout({ children, router }) {
  const appRootElement = typeof window === 'object' ? document.getElementById('__next') : null
  const lng = getLocaleFromUrl(router.asPath)

  return (
    <>
      <Meta />

      <ThemeProvider theme={theme}>
        <Header pathname="merch" lng={lng} NextLink={Link} appRootElement={appRootElement} />
      </ThemeProvider>

      <PageContent>
        <main id="main">{children}</main>
        <Footer className="footer" nav={nav} />
      </PageContent>

      <Global styles={styles} />
    </>
  )
}

export default withRouter(Layout)
