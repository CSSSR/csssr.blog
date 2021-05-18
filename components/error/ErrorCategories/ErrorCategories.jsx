import styled from '@emotion/styled'
import cn from 'classnames'
import Link from 'next/link'
import { arrayOf, string } from 'prop-types'
import React from 'react'

import categoriesByLanguage, { categoriesOrder } from '../../../data/categoriesByLanguage'

import styles from './ErrorCategories.styles'

const ErrorCategories = ({ className, language, items, activeCategory }) => {
  return (
    <div className={className} data-testid="ErrorCategories:block">
      <div className="inner">
        <ul className="items">
          {categoriesOrder
            .filter((categoryId) => items.some((itemId) => itemId === categoryId))
            .map((id) => {
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
                      data-testid={`ErrorCategories:link:${id}`}
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
                <a className={cn('link')} data-testid="ErrorCategories:link:news">
                  🔥 Новости
                </a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

ErrorCategories.defaultProps = {
  items: [],
}

ErrorCategories.propTypes = {
  className: string,
  language: string,
  activeCategory: string,
  items: arrayOf(string),
}

export default styled(ErrorCategories)`
  ${styles}
`
