import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { Footer } from '@csssr/core-design'

const FooterWrapper = ({ preset, type, language, setBottomPosition }) => {
  const footerRef = useRef()

  useEffect(() => {
    const callback = function ([entry]) {
      setBottomPosition(entry.isIntersecting)
    }

    const margin = language === 'ru' && type !== 'news' ? '200px 0px 0px 0px' : '0px 0px 0px 0px'

    const options = {
      root: null,
      rootMargin: margin,
      threshold: 0,
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(callback, options)
      observer.observe(footerRef.current)

      return () => observer.disconnect()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={footerRef}>
      <Footer className="footer" preset={preset[language]} />
    </div>
  )
}

export default styled(FooterWrapper)``
