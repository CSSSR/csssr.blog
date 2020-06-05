import Head from 'next/head'

const Index = () => (
  <Head>
    <meta httpEquiv="refresh" content="0; URL='/en'" />
    <script dangerouslySetInnerHTML={{ __html: 'window.location.replace("/en")' }} />
  </Head>
)
export default Index
