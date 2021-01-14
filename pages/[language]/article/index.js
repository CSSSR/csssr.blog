import Head from 'next/head'
import languages from '../../../utils/languages'

export async function getStaticProps({ params }) {
  const { language } = params

  return {
    props: {
      language,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: languages.map((language) => ({ params: { language } })),
    fallback: false,
  }
}

const Index = ({ language }) => (
  <Head>
    <meta httpEquiv="refresh" content={`0; URL='/${language}'`} />
    <script dangerouslySetInnerHTML={{ __html: `window.location.replace("/${language}")` }} />
  </Head>
)
export default Index
