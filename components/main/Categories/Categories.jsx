import styled from '@emotion/styled'
import cn from 'classnames'
import Link from 'next/link'
import React, { createRef, useEffect, useState } from 'react'

import categoriesByLanguage, { categoriesOrder } from '../../../data/categoriesByLanguage'
import { Grid } from '../../Grid'

import ActiveLine from './ActiveLine'
import styles from './Categories.styles'

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

  useEffect(() => {
    activeItemRef?.current?.scrollIntoView(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid className={className} data-testid="Categories:block">
      <div className="inner">
        <ul className="items">
          {categoriesOrder
            .filter((categoryId) => items.some((itemId) => itemId === categoryId))
            .map((id) => {
              let href = undefined
              let as = undefined

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
                      data-testid={`Categories:link:${id}`}
                    >
                      {categoriesByLanguage[language][id]}
                    </a>
                  </Link>
                </li>
              )
            })}

          {language === 'ru' && (
            <li className="item">
              <Link href={`/${language}/news512`}>
                <a
                  className={cn('link', {
                    _active: 'news512' === activeCategory,
                  })}
                  ref={'news512' === activeCategory ? activeItemRef : null}
                  data-testid="Categories:link:news"
                >
                  🔥 Новости
                </a>
              </Link>
            </li>
          )}
        </ul>
        <ActiveLine width={activeWidth} left={activeLeft} />
      </div>
    </Grid>
  )
}

Categories.defaultProps = {
  items: [],
}

export default styled(Categories)`
  ${styles}
`
