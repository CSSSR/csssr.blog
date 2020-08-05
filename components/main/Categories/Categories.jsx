import React, { useState, createRef, useEffect } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import styled from '@emotion/styled'
import styles from './Categories.styles'
import ActiveLine from './ActiveLine'
import categoriesByLanguage from '../../../data/categoriesByLanguage'

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
          {items.map((id) => {
            let href
            let as

            if (id === 'all') {
              href = '/[language]'
              as = `/${language}`
            } else {
              href = '/[language]/[category]'
              as = `/${language}/${id}`
            }

            return (
              <li key={id} className="item">
                <Link href={href} as={as}>
                  <a
                    className={cn('link', { _active: id === activeCategory })}
                    ref={id === activeCategory ? activeItemRef : null}
                  >
                    {categoriesByLanguage[language][id]}
                  </a>
                </Link>
              </li>
            )
          })}
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
