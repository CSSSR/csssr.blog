import React from 'react'
import ErrorPage from '../../components/error/ErrorPage'
import languages from '../../utils/languages'

// This page is placed here for testing purposes
class Custom500 extends React.Component {
  render() {
    return <ErrorPage statusCode={500} language={this.props.language} {...this.props} />
  }
}

export async function getStaticProps({ params }) {
  const language = params.language

  return {
    props: {
      language,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: languages.map((language) => ({
      params: {
        language,
      },
    })),
    fallback: false,
  }
}

export default Custom500
