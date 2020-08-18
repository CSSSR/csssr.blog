import { GtmNoScript, GtmScript } from 'react-gtm-components'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Fonts from '../components/Fonts'
import getGtmId from '../utils/getGtmId'

export default class MyDocument extends Document {
  render() {
    const language = this.props.dangerousAsPath.includes('ru') ? 'ru' : 'en'
    const gtmId = getGtmId(language)

    return (
      <Html lang={language}>
        <Head>
          <GtmScript gtmId={gtmId} />
          <link
            href={require('../public/components/post/post-header-bg.svg').default}
            rel="prefetch"
            as="image"
            type="image/svg+xml"
            crossOrigin="anonymous"
          />
          {/* TODO: вынести шрифты – https://jira.csssr.io/browse/COM-2172 */}
          <Fonts />
        </Head>
        <body>
          <GtmNoScript gtmId={gtmId} />
          <Main />
          <NextScript />
          {/* Скрипт должен срабатывать в IE11 поэтому не используется ES6 синтаксис */}
          <script
            dangerouslySetInnerHTML={{
              __html: `window.addEventListener('load', function() {
                var isValidBrowser

                if (window.CSS && window.CSS.supports) {
                  isValidBrowser = (
                    CSS.supports('display', 'flex') && CSS.supports('display', 'grid')
                  )
                }

                if (!isValidBrowser) {
                  var modalScript = document.createElement('script')
                  modalScript.src = '/modal/modal.js'
                  document.body.appendChild(modalScript)
                }
              })`,
            }}
          />
        </body>
      </Html>
    )
  }
}
