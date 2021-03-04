import { GtmNoScript, GtmScript } from 'react-gtm-components'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import getGtmId from '../utils/getGtmId'
import { Fonts } from '@csssr/core-design'

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
          {this.props.dangerousAsPath === '/ru/subscribe' && (
            <>
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `var _paq = _paq || []; (function(){ if(window.apScriptInserted) return; _paq.push(['clientToken', 'P%2bsIjEMd6oQ%3d']); var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.type='text/javascript'; g.async=true; g.defer=true; g.src='[https://prod.benchmarkemail.com/tracker.bundle.js](https://prod.benchmarkemail.com/tracker.bundle.js)'; s.parentNode.insertBefore(g,s); window.apScriptInserted=true;})(); `,
                }}
              />

              {/* <script
                type="text/javascript"
                id="lbscript1499156"
                src="https://lb.benchmarkemail.com//code/lbformnew.js?mFcQnoBFKMT1rJ4a9IDlKBcwvUXpuXVDgIzF75X4VHnTiptUnEhJ%252BQ%253D%253D"
              ></script> */}
              <noscript>
                Please enable JavaScript <br />
                <div
                  align="center"
                  style={{
                    paddingTop: '5px',
                    fontFamily: 'Arial,Helvetica,sans-serif',
                    fontSize: '10px',
                    color: '#999999',
                  }}
                >
                  <a
                    href="[https://www.benchmarkemail.com/email-marketing?utm_source=usersignupforms&utm_medium=customers&utm_campaign=usersignupforms](https://www.benchmarkemail.com/email-marketing?utm_source=usersignupforms&utm_medium=customers&utm_campaign=usersignupforms)"
                    target="_new"
                    style={{
                      textDecoration: 'none',
                      fontFamily: 'Arial,Helvetica,sans-serif',
                      fontSize: '10px',
                      color: '#999999',
                    }}
                  >
                    Email Marketing{' '}
                  </a>{' '}
                  by Benchmark
                </div>
              </noscript>
            </>
          )}
        </body>
      </Html>
    )
  }
}
