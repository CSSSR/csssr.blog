import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import cn from 'classnames'
import { string } from 'prop-types'
import { Grid } from '@csssr/core-design'

import styles from './Pagination.styles'

const Pagination = ({ className, postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [changedPageNumbers, setChangedPageNumbers] = useState(pageNumbers)
  const [prevIsDisable, setPrevDisable] = useState(false)
  const [nextIsDisable, setNextDisable] = useState(false)
  let currentIndex = pageNumbers.indexOf(currentPage)
  let lastIndex = pageNumbers.slice(-1) - 1

  const updatePageNumbers = () => {
    if (currentIndex < 4 && pageNumbers.length >=7 ) {
      setChangedPageNumbers(pageNumbers.filter(item => pageNumbers.indexOf(item) < 5 || pageNumbers.indexOf(item) === lastIndex ))
    }

    if (currentIndex > lastIndex - 4) {
      setChangedPageNumbers(pageNumbers.filter(item => pageNumbers.indexOf(item) < lastIndex - 4 || pageNumbers.indexOf(item) === 0 ))
    }
  }

  const updateArrows = () => {
    currentIndex !== 0 ? setPrevDisable(false) : setPrevDisable(true)
    currentIndex !== lastIndex ? setNextDisable(false) : setNextDisable(true)
  }

  const handlePrevPaginate = () => {
    paginate(currentPage - 1)
    updatePageNumbers()
    updateArrows()
  }

  const handleNextPaginate = () => {
    paginate(currentPage + 1)
    updatePageNumbers()
    updateArrows()
  }

  useEffect(() => {
    updatePageNumbers()
    updateArrows()
  }, [changedPageNumbers])
  
  return (
    <Grid as="div" className={className}>
      <button 
        className={cn('control-button prev', {
          _disabled: prevIsDisable
        })}
        onClick={handlePrevPaginate} />
      {changedPageNumbers.map(number => (
        <span 
          key={number}
          className={cn('item',
            {active: number === currentPage}
          )}
          onClick={() => paginate(number)}
        >
          {number}
        </span>
      ))}
      <button 
        className={cn('control-button next', {
          _disabled: nextIsDisable
        })}
        onClick={handleNextPaginate}
      />
    </Grid>
  )
}

Pagination.propTypes = {
  className: string,

}

export default styled(Pagination)`
  ${styles}
`
