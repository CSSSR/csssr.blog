import React, { useEffect } from 'react'
import { Heading } from '@csssr/core-design'
import styled from '@emotion/styled'
import { string } from 'prop-types'

import styles from './Comments.styled'

const insertScript = (src, id, parentElement) => {
  const script = window.document.createElement('script')

  script.async = true
  script.src = src
  script.id = id
  parentElement.appendChild(script)

  return script
}

const removeScript = (id, parentElement) => {
  const script = window.document.getElementById(id)

  if (script) {
    parentElement.removeChild(script)
  }
}

const Comments = ({ id, className }) => {
  useEffect(() => {
    if (!window) {
      return
    }

    const document = window.document

    if (document.getElementById('commento')) {
      insertScript('https://cdn.commento.io/js/commento.js', 'commento-script', document.body)
    }

    return () => removeScript('commento-script', document.body)
  }, [id])

  return (
    <div className={className}>
      <Heading.H3 type="regular" size="l" className="title">
        Comments
      </Heading.H3>

      <div id="commento" />
    </div>
  )
}

Comments.propTypes = {
  className: string,
}

export default styled(Comments)`
  ${styles}
`
