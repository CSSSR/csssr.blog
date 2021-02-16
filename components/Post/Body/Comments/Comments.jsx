import React, { useEffect, useRef } from 'react'
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

const cleanComments = () => {
  const commentsContainer = window.document.getElementById('commento')

  if (commentsContainer) {
    while (commentsContainer.firstChild) {
      commentsContainer.removeChild(commentsContainer.lastChild)
    }
  }
}

const Comments = ({ id, className, postType, language, setBottomPossition }) => {
  const commnetsRef = useRef()
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

  useEffect(() => {
    const callback = function ([entry]) {
      entry.isIntersecting ? setBottomPossition(true) : setBottomPossition(false)
    }

    const margin = (language === 'ru' && postType !== 'news') ? '500px 0px 0px 0px' : '0px 0px -500px 0px'
    const langThreshold = (language === 'ru' && postType !== 'news') ? '1' : '0'

    const options = {
      root: null,
      rootMargin: margin,
      threshold: langThreshold
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(callback, options)
      observer.observe(commnetsRef.current)

      return () => observer.disconnect()
    }
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div 
      className={className}
      ref={commnetsRef}
    >
      <Heading.H3 type="regular" size="l" className="title">
        {language === 'ru' ? 'Комментарии' : 'Comments'}
      </Heading.H3>

      <div id="commento" />
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
