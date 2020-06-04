import Head from 'next/head'

const Index = () => (
  <Head>
    <meta httpEquiv="refresh" content="0; URL='https://blog.csssr.com/en'" />
    <script dangerouslySetInnerHTML={{__html: 'window.location.replace("https://blog.csssr.com/en")'}} />
  </Head>
)
export default Index
