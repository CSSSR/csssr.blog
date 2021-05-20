import { Fonts } from '@csssr/core-design'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { GtmNoScript, GtmScript } from 'react-gtm-components'

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
          <Fonts preset="blog" />

          <Fonts
            options={[
              {
                family: 'Amita',
                weight: 400,
                style: 'normal',
                rel: 'preload',
              },
            ]}
          />

          <Fonts
            options={[
              {
                family: 'Sweet Mavka Script',
                weight: 400,
                style: 'normal',
                rel: 'preload',
              },
            ]}
          />
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
