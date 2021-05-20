import styled from '@emotion/styled'
import cn from 'classnames'
import Link from 'next/link'
import { bool, number, string } from 'prop-types'
import React from 'react'

import styles from './NextPageLink.styles'

const NextPageLink = ({
  className,
  language,
  disabled,
  activeCategory,
  activePageNumber,
  totalNumberOfPages,
}) => {
  const testId = 'Pagination:link:nextPage'

  if (activePageNumber === totalNumberOfPages) {
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

  return (
    <Link href={`/${language}/${activeCategory.toLowerCase()}/${activePageNumber + 1}`}>
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

NextPageLink.propTypes = {
  className: string,
  language: string,
  disabled: bool,
  activeCategory: string,
  activePageNumber: number,
  totalNumberOfPages: number,
}

export default styled(NextPageLink)`
  ${styles}
`
