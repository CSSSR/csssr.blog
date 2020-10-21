import React from 'react'
import { string, number, bool } from 'prop-types'
import Link from 'next/link'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Pagination.styles'
import { Grid } from '@csssr/core-design'
import PrevPageLink from './PrevPageLink'
import NextPageLink from './NextPageLink'
import { POSTS_PER_PAGE, NEWS_PER_PAGE } from '../../../data/constants'
import getPageNumbers from '../../../utils/getPageNumbers'

const Pagination = ({
  className,
  language,
  activeCategory,
  activePageNumber,
  totalNumberOfPosts,
  isNews,
}) => {
  const perPage = isNews ? NEWS_PER_PAGE : POSTS_PER_PAGE
  const totalNumberOfPages = Math.ceil(totalNumberOfPosts / perPage)
  const pageNumbers = getPageNumbers(activePageNumber, totalNumberOfPages)

  if (totalNumberOfPages <= 1) {
    return <></>
  }

  return (
    <Grid as="div" className={className}>
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

        let href

        if (pageNumber === 1 && activeCategory.toLowerCase() === 'all') {
          href = `/${language}`
        } else if (pageNumber === 1) {
          href = `/${language}/${activeCategory.toLowerCase()}`
        } else {
          href = `/${language}/${activeCategory.toLowerCase()}/${pageNumber}`
        }

        return (
          <Link key={index} href={href}>
            <a className={cn('item', { active: pageNumber === activePageNumber })}>{pageNumber}</a>
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
  isNews: bool,
}

export default styled(Pagination)`
  ${styles}
`
