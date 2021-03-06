import Head from 'next/head'
import { withRouter } from 'next/router'

const Meta = ({ router, type }) => (
  <Head>
    <link rel="canonical" href={`${process.env.BLOG_HOST}${router.asPath}`} />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-48x48.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/favicon/site.webmanifest" />
    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
    <link rel="shortcut icon" href="/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
    <meta name="theme-color" content="#000" />

    {type === 'news' ? (
      <>
        <meta property="og:image:width" content="3840" />
        <meta property="og:image:height" content="1920" />
      </>
    ) : (
      <>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </>
    )}

    <meta property="fb:app_id" content="416195255787519" />
    <script
      dangerouslySetInnerHTML={{
        __html: `
        // https://stackoverflow.com/a/27232658
        function canUseWebP() {
            const canvas = document.createElement('canvas')
            canvas.width = canvas.height = 1;
            return canvas.toDataURL &&
              canvas.toDataURL('image/webp') &&
              canvas.toDataURL('image/webp').indexOf('image/webp') === 5
        }
        if (canUseWebP()) {
            document.documentElement.classList.add('webp')
        }
      `,
      }}
    />
  </Head>
)

export default withRouter(Meta)
