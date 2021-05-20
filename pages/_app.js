import { defaultTheme, Root } from '@csssr/core-design'
import { ThemeProvider } from '@emotion/react'
import Router from 'next/router'
import Prism from 'prismjs'
import { useEffect } from 'react'
import '../utils/sentry'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    window.addEventListener('keydown', function (event) {
      if (event.which === 9) {
        document.body.classList.add('outline')
      }
    })

    window.addEventListener('click', function () {
      document.body.classList.remove('outline')
    })
    Prism.highlightAll()
  })

  useEffect(() => {
    const handleRouteChangeStart = () => {
      document.documentElement.classList.add('disable-smooth-scroll')
    }

    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        document.documentElement.classList.remove('disable-smooth-scroll')
      })
    }

    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  })

  return (
    <Root>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Root>
  )
}

export default MyApp
