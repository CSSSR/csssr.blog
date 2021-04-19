import React, { useEffect } from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './Comments.styled'
import { Global } from '@emotion/react'
import { Heading } from '@csssr/core-design'
import { useRouter } from 'next/router'

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

const Comments = ({ id, className, language, IS_PRODUCTION }) => {
  const { asPath } = useRouter()
  //This part allows comments in development mode
  //Read more about this hack: https://remysharp.com/2019/06/11/ejecting-disqus#testing-commento-offline--adjusting-urls
  useEffect(() => {
    if (IS_PRODUCTION) {
      return
    }

    window.parent = {
      location: {
        host: 'commento-testing.csssr-new-blog.csssr.cloud',
        pathname: asPath,
      },
    }
  }, [IS_PRODUCTION, asPath])

  useEffect(() => {
    const document = window.document
    if (!window) {
      return
    }

    if (document.getElementById('commento')) {
      insertScript('https://cdn.commento.io/js/commento.js', 'commento-script', document.body)
    }

    return () => {
      removeScript('commento-script', document.body)
      cleanComments()
    }
  }, [id])

  return (
    <div className={className} data-testid="Comments:block">
      <Heading.H3 type="regular" size="l" className="title">
        {language === 'ru' ? 'Комментарии' : 'Comments'}
      </Heading.H3>

      <div id="commento" />
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
