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

const Comments = ({ id, className, language }) => {
  const handleSubmitButtonClick = (e) => {
    const target = e.target

    if (target.className === 'commento-button commento-submit-button') {
      removeScript('commento-comments-counter', document.body)
      insertScript('https://cdn.commento.io/js/count.js', 'commento-comments-counter', document.body)
      document.getElementById("commento-comments-counter").setAttribute("data-custom-text", "window.commentoCustomText");
    }
  }

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
      insertScript('https://cdn.commento.io/js/count.js', 'commento-comments-counter', document.body)
      document.getElementById("commento-comments-counter").setAttribute("data-custom-text", "window.commentoCustomText");
      window.commentoCustomText = function(count) {
        return count;
      }
    }

    return () => {
      removeScript('commento-script', document.body)
      removeScript('commento-comments-counter', document.body)
      cleanComments()
    }
  }, [id])

  return (
    <div className={className}>
      <div className="title-wrapper">
        <Heading.H3 type="regular" size="l" className="title">
          {language === 'ru' ? 'Комментарии' : 'Comments'}
        </Heading.H3>
        <a className="total-comments" href="#commento" data-page-id={`${language}/article/${id}`} />
      </div>

      <div id="commento" onClick={handleSubmitButtonClick} />
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
