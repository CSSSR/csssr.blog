import { GtmNoScript, GtmScript } from 'react-gtm-components'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import getGtmId from '../utils/getGtmId'

export default class MyDocument extends Document {
  render() {
    const gtmId = getGtmId()

    return (
      <Html lang={this.props.dangerousAsPath.includes('ru') ? 'ru' : 'en'}>
        <Head>
          <GtmScript gtmId={gtmId} />
        </Head>
        <body>
          <GtmNoScript gtmId={gtmId} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
