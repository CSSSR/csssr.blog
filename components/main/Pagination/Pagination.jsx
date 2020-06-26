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

  const [prevIsDisable, setPrevDisable] = useState(false)
  const [nextIsDisable, setNextDisable] = useState(false)
  let currentIndex = pageNumbers.indexOf(currentPage);
  let lastIndex = pageNumbers.slice(-1) - 1;

  const handlePrevPaginate = () => {
    if (pageNumbers.indexOf(currentPage) === 0) {
      setPrevDisable(true)
      return
    }
    setNextDisable(false)
    paginate(currentPage - 1)
  }

  const handleNextPaginate = () => {
    if (currentIndex === lastIndex) {
      setNextDisable(true)
      return
    }

    setPrevDisable(false)
    paginate(currentPage + 1)
  }

  useEffect(() => {
    currentIndex !== 0 ? setPrevDisable(false) : setPrevDisable(true)
    currentIndex !== lastIndex ? setNextDisable(false) : setNextDisable(true)
  })
  
  return (
    <Grid as="div" className={className}>
      <button 
        className={cn('control-button prev', {
          _disabled: prevIsDisable
        })}
        onClick={handlePrevPaginate} />
      {pageNumbers.map(number => (
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
