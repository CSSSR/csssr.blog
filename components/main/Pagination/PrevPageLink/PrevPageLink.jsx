import styled from '@emotion/styled'
import cn from 'classnames'
import Link from 'next/link'
import { bool, number, string } from 'prop-types'
import React from 'react'

import styles from './PrevPageLink.styles'

const PrevPageLink = ({ className, language, disabled, activeCategory, activePageNumber }) => {
  const testId = 'Pagination:link:prevPage'

  if (activePageNumber === 1) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        className={cn(className, {
          _disabled: disabled,
        })}
        data-testid={testId}
      />
    )
  }

  let href

  if (activePageNumber === 2 && activeCategory.toLowerCase() === 'all') {
    href = `/${language}`
  } else if (activePageNumber === 2) {
    href = `/${language}/${activeCategory.toLowerCase()}`
  } else {
    href = `/${language}/${activeCategory.toLowerCase()}/${activePageNumber - 1}`
  }

  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a
        className={cn(className, {
          _disabled: disabled,
        })}
        data-testid={testId}
      />
    </Link>
  )
}

PrevPageLink.propTypes = {
  className: string,
  language: string,
  disabled: bool,
  activeCategory: string,
  activePageNumber: number,
}

export default styled(PrevPageLink)`
  ${styles}
`
