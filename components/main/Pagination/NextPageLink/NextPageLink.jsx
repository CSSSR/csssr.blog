import React from 'react'
import { string, number, bool } from 'prop-types'
import Link from 'next/link'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './NextPageLink.styles'

const NextPageLink = ({
  className,
  language,
  disabled,
  activeCategory,
  activePageNumber,
  totalNumberOfPages,
}) => {
  if (activePageNumber === totalNumberOfPages) {
    return (
      <a
        className={cn(className, {
          _disabled: disabled,
        })}
      />
    )
  }

  return (
    <Link href={`/${language}/${activeCategory.toLowerCase()}/${activePageNumber + 1}`}>
      <a
        className={cn(className, {
          _disabled: disabled,
        })}
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
