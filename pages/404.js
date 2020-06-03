import Error404Page from '../components/error/Error404Page'
import React from 'react'

class Custom404 extends React.Component {
  render() {
    return <Error404Page {...this.props} />
  }
}

export default Custom404
