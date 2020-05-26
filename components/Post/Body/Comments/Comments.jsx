import React, { useEffect } from 'react'
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

const Comments = ({ className }) => {
  useEffect(() => {
    if (!window) {
      return
    }

    const document = window.document

    if (document.getElementById('commento')) {
      insertScript('https://cdn.commento.io/js/commento.js', 'commento-script', document.body)
    }

    return () => removeScript('commento-script', document.body)
  })

  return <div id="commento" className={className} />
}

Comments.propTypes = {
  className: string,
}

export default styled(Comments)`
  ${styles}
`
