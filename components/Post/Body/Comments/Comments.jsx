import React, { useEffect } from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './Comments.styled'
import { Global } from '@emotion/react'
import { Heading } from '@csssr/core-design'

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

const cleanComments = () => {
  const commentsContainer = window.document.getElementById('commento')

  if (commentsContainer) {
    while (commentsContainer.firstChild) {
      commentsContainer.removeChild(commentsContainer.lastChild)
    }
  }
}

let totalComments = 1

const getCommentsLength = () => {
  totalComments = window.document.querySelectorAll('.commento-header').length
}

const Comments = ({ id, className, language }) => {
  //This part allows comments in development mode
  //Read more about this hack: https://remysharp.com/2019/06/11/ejecting-disqus#testing-commento-offline--adjusting-urls
  useEffect(() => {
    window.parent = {
      location: {
        host: 'https://blog.csssr.com/',
        pathname: `${language}/article/${id}`,
      },
    }
  }, [language, id])

  useEffect(() => {
    if (!window) {
      return
    }

    const document = window.document

    if (document.getElementById('commento')) {
      insertScript('https://cdn.commento.io/js/commento.js', 'commento-script', document.body)
    }

    return () => {
      removeScript('commento-script', document.body)
      cleanComments()
    }
  }, [id])

  const clickHandler = (e) => {
    const target = e.target

    if (target.className === 'commento-button commento-submit-button') {
      getCommentsLength()
    }
  }

  return (
    <div className={className}>
      <div style={{ display: 'flex' }}>
        <Heading.H3 type="regular" size="l" className="title">
          {language === 'ru' ? 'Комментарии' : 'Comments'}
        </Heading.H3>
        <p style={{ fontSize: '40px' }}>{totalComments}</p>
      </div>

      <div id="commento" onClick={clickHandler} />
      <Global styles={backgroundImagesStyles} />
    </div>
  )
}

Comments.propTypes = {
  className: string,
  id: string,
}

export default styled(Comments)`
  ${styles}
`
