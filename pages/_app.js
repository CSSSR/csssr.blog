import { ThemeProvider } from 'emotion-theming'
import { Root, defaultTheme } from '@csssr/core-design'

console.log('xxx', defaultTheme)
const MyApp = ({ Component, pageProps }) => (
  <Root>
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </Root>
)

export default MyApp
