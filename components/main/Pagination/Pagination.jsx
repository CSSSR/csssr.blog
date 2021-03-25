import { Grid } from '@csssr/core-design'
import styled from '@emotion/styled'
import cn from 'classnames'
import Link from 'next/link'
import { number, string } from 'prop-types'
import React from 'react'

import { POSTS_PER_PAGE } from '../../../data/constants'
import getPageNumbers from '../../../utils/getPageNumbers'

import NextPageLink from './NextPageLink'
import styles from './Pagination.styles'
import PrevPageLink from './PrevPageLink'

const Pagination = ({
  className,
  language,
  activeCategory,
  activePageNumber,
  totalNumberOfPosts,
  postsPerPage,
}) => {
  const totalNumberOfPages = Math.ceil(totalNumberOfPosts / postsPerPage)
  const pageNumbers = getPageNumbers(activePageNumber, totalNumberOfPages)

  if (totalNumberOfPages <= 1) {
    return <></>
  }

  return (
    <Grid as="div" className={className} data-testid="Pagination:block">
      <PrevPageLink
        language={language}
        disabled={pageNumbers[0] === activePageNumber}
        activeCategory={activeCategory}
        activePageNumber={activePageNumber}
      />

      {pageNumbers.map((pageNumber, index) => {
        if (pageNumber === '...') {
          return (
            <span key={index} className={cn('item', 'dots')}>
              {pageNumber}
            </span>
          )
        }

        let href = undefined

        if (pageNumber === 1 && activeCategory.toLowerCase() === 'all') {
          href = `/${language}`
        } else if (pageNumber === 1) {
          href = `/${language}/${activeCategory.toLowerCase()}`
        } else {
          href = `/${language}/${activeCategory.toLowerCase()}/${pageNumber}`
        }

        return (
          <Link key={index} href={href}>
            <a
              className={cn('item', {
                active: pageNumber === activePageNumber,
              })}
              data-testid={`Pagination:link:pageNumber.${pageNumber}`}
            >
              {pageNumber}
            </a>
          </Link>
        )
      })}

      <NextPageLink
        language={language}
        disabled={totalNumberOfPages === activePageNumber}
        activeCategory={activeCategory}
        activePageNumber={activePageNumber}
        totalNumberOfPages={totalNumberOfPages}
      />
    </Grid>
  )
}

Pagination.propTypes = {
  className: string,
  language: string,
  activeCategory: string,
  activePageNumber: number,
  totalNumberOfPosts: number,
  postsPerPage: number,
}

Pagination.defaultProps = {
  postsPerPage: POSTS_PER_PAGE,
}

export default styled(Pagination)`
  ${styles}
`
