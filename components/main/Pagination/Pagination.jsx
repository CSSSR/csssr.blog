import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import cn from 'classnames'
import { string, number, func } from 'prop-types'
import { Grid } from '@csssr/core-design'

import styles from './Pagination.styles'

const Pagination = ({ className, postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [changedPageNumbers, setChangedPageNumbers] = useState(pageNumbers);
  const [prevIsDisable, setPrevDisable] = useState(false);
  const [nextIsDisable, setNextDisable] = useState(false);
  let currentIndex = pageNumbers.indexOf(currentPage);
  let lastIndex = pageNumbers.slice(-1) - 1;

  useEffect(() => {
    updatePageNumbers(currentPage);
    currentIndex !== 0 ? setPrevDisable(false) : setPrevDisable(true);
    currentIndex !== lastIndex ? setNextDisable(false) : setNextDisable(true);
  }, [currentIndex])

  const updatePageNumbers = (number) => {
    
    if (currentIndex < 4 && pageNumbers.length >= 7 ) {
      setChangedPageNumbers(pageNumbers.filter(item =>
        pageNumbers.indexOf(item) < 5 || 
        pageNumbers.indexOf(item) === lastIndex
      ));

      setChangedPageNumbers([...pageNumbers.slice(0, 5), '...', ...pageNumbers.slice(lastIndex)]);

    } else if (currentIndex > lastIndex - 4 && pageNumbers.length >= 7) {
      setChangedPageNumbers(pageNumbers.filter(item =>
        pageNumbers.indexOf(item) > lastIndex - 5 || 
        pageNumbers.indexOf(item) === 0 
      ));

      setChangedPageNumbers([...pageNumbers.slice(0, 1), '...', ...pageNumbers.slice(lastIndex - 4, lastIndex + 1)]);

    } else {
      setChangedPageNumbers(pageNumbers.filter(item =>
        pageNumbers.indexOf(item) === 0 || 
        pageNumbers.indexOf(item) === currentIndex - 1 ||
        pageNumbers.indexOf(item) === currentIndex ||
        pageNumbers.indexOf(item) === currentIndex + 1 || 
        pageNumbers.indexOf(item) === lastIndex
      ));

      // setChangedPageNumbers([
      //   ...pageNumbers.slice(0, 1),
      //   '...',
      //   ...pageNumbers.slice(currentIndex - 1, currentIndex + 1),
      //   '...',
      //   ...pageNumbers.slice(lastIndex),
      // ]); // вот здесь работает не правильно, currentIndex, видимо, нужно заменить на что-то другое 
    }
    
    paginate(number);
  }

  const handlePrevPaginate = () => {
    if (pageNumbers.indexOf(currentPage) === 0) {
      setPrevDisable(true);
      return;
    }
    setNextDisable(false);
    paginate(currentPage - 1);
  }

  const handleNextPaginate = () => {
    if (currentIndex === lastIndex) {
      setNextDisable(true);
      return;
    }

    setPrevDisable(false);
    paginate(currentPage + 1);
  }
  
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
            {active: number === currentPage},
            {dots: number === '...'}
          )}
          onClick={() => updatePageNumbers(number)}
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
  postsPerPage: number,
  totalPosts: number,
  paginate: func,
  currentPage: number
}

export default styled(Pagination)`
  ${styles}
`
