import React from 'react'
import { string, number, bool } from 'prop-types'
import Link from 'next/link'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './PrevPageLink.styles'

const PrevPageLink = ({ className, language, disabled, activeCategory, activePageNumber }) => {
  if (activePageNumber === 1) {
    return (
      <a
        className={cn(className, {
          _disabled: disabled,
        })}
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
      <a
        className={cn(className, {
          _disabled: disabled,
        })}
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
