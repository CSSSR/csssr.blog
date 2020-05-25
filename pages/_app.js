import { useEffect } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Root, defaultTheme } from '@csssr/core-design'
import Prism from 'prismjs'

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

  return (
    <Root>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Root>
  )
}

export default MyApp
