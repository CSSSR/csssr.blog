import Head from 'next/head'

const Index = () => (
  <Head>
    <meta httpEquiv="refresh" content="0; URL='/ru/news512'" />
    <script
      dangerouslySetInnerHTML={{
        __html: 'window.location.replace("/ru/news512")',
      }}
    />
  </Head>
)

export default Index
