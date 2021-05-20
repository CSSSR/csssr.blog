import React from 'react'

import ErrorPage from '../components/error/ErrorPage'

class MyError extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return <ErrorPage {...this.props} />
  }
}

export default MyError
