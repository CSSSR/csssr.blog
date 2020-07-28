import React, { useState, createRef, useEffect } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import styled from '@emotion/styled'
import styles from './Categories.styles'
import ActiveLine from './ActiveLine'

const Categories = ({ className, items, activeCategory, language }) => {
  const [activeWidth, setActiveWidth] = useState(0)
  const [activeLeft, setActiveLeft] = useState(0)
  const activeItemRef = createRef(null)

  useEffect(() => {
    if (activeItemRef && activeItemRef.current) {
      const { offsetWidth, offsetLeft } = activeItemRef.current
      // TODO: Временно решение возможно анимация изменится
      setTimeout(() => {
        setActiveWidth(offsetWidth)
        setActiveLeft(offsetLeft)
      }, 0)
    }
  }, [activeItemRef])

  return (
    <div className={className}>
      <div className="inner">
        <ul className="items">
          {items.map(({ id, title }) => (
            <li key={id} className="item">
              <Link
                href="/[language]/category/[category]/page/[page]"
                as={`/en/category/${id.toLowerCase()}/page/1`}
              >
                <a
                  className={cn('link', { _active: id === activeCategory })}
                  dangerouslySetInnerHTML={{ __html: title[language] }}
                  ref={id === activeCategory ? activeItemRef : null}
                />
              </Link>
            </li>
          ))}
        </ul>
        <ActiveLine width={activeWidth} left={activeLeft} />
      </div>
    </div>
  )
}

Categories.defaultProps = {
  items: [],
}

export default styled(Categories)`
  ${styles}
`
