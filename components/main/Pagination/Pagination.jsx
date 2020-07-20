import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import cn from 'classnames'
import { string, number, func } from 'prop-types'
import { Grid } from '@csssr/core-design'

import styles from './Pagination.styles'

const Pagination = ({ className, postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const [result, setResult] = useState([])
  const [prevIsDisable, setPrevDisable] = useState(false)
  const [nextIsDisable, setNextDisable] = useState(false)
  let currentIndex = pageNumbers.indexOf(currentPage)
  let lastIndex = pageNumbers.slice(-1) - 1
  const sliceAmount = currentIndex < 5 ? 5 : currentIndex + 1
  const sliceStart = currentIndex < 5 ? 0 : currentIndex - 2

  useEffect(() => {
    updatePageNumbers(currentIndex, pageNumbers, currentPage)
    currentIndex !== 0 ? setPrevDisable(false) : setPrevDisable(true)
    currentIndex !== lastIndex ? setNextDisable(false) : setNextDisable(true)
  }, [currentIndex])

  const updatePageNumbers = (currentIndex, pageNumbers, number) => {
    if (pageNumbers.length <= 7) {
      setResult[pageNumbers]
    }

    if (currentIndex >= 5) {
      // вырезаем соседние цифры с текущей страницей,
      // если разница между текущей и последней странице больше или равна 4
      if (pageNumbers.length - currentIndex >= 4) {
        setResult([1, '...', ...pageNumbers.slice(sliceStart, sliceAmount)])
      } else {
        // вырезаем последние пять цифр,
        // если разница между текущей и последней странице меньше или не равна 4
        setResult([1, '...', ...pageNumbers.slice(-5)])
      }
    }

    if (pageNumbers.length - currentIndex >= 4) {
      // ставим троеточие в начале и в конце, если страница при этом больше или равна 5
      if (currentIndex >= 5) {
        setResult([
          ...result.slice(0, 2),
          ...pageNumbers.slice(sliceStart, sliceAmount),
          '...',
          pageNumbers.length,
        ])
      } else {
        // ставим троеточие в конце, если страница меньше 5
        setResult([...pageNumbers.slice(sliceStart, sliceAmount), '...', pageNumbers.length])
      }
    } // Второе решение

    // if (currentIndex < 4) {
    //   setResult(pageNumbers.filter(item =>
    //     pageNumbers.indexOf(item) < 5 ||
    //     pageNumbers.indexOf(item) === lastIndex
    //   ));

    //   setResult([...pageNumbers.slice(0, 5), '...', ...pageNumbers.slice(lastIndex)]);

    // } else if (currentIndex > lastIndex - 4) {
    //   setResult(pageNumbers.filter(item =>
    //     pageNumbers.indexOf(item) > lastIndex - 5 ||
    //     pageNumbers.indexOf(item) === 0
    //   ));

    //   setResult([1, '...', ...pageNumbers.slice(lastIndex - 4, lastIndex + 1)]);

    // } else if ((pageNumbers.length - currentIndex) >= 4 || currentIndex >= 5) {
    //   setResult(pageNumbers.filter(item =>
    //     pageNumbers.indexOf(item) === 0 ||
    //     pageNumbers.indexOf(item) === currentIndex - 1 ||
    //     pageNumbers.indexOf(item) === currentIndex ||
    //     pageNumbers.indexOf(item) === currentIndex + 1 ||
    //     pageNumbers.indexOf(item) === lastIndex
    //   ));

    //   setResult([
    //     ...pageNumbers.slice(0, 1),
    //     '...',
    //     ...pageNumbers.slice(currentIndex - 1, currentIndex + 2),
    //     '...',
    //     ...pageNumbers.slice(lastIndex),
    //   ]); // вот здесь работает не правильно, currentIndex, видимо, нужно заменить на что-то другое
    // }  // Первое решение

    paginate(number)
  }

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

  return (
    <Grid as="div" className={className}>
      <button
        className={cn('control-button prev', {
          _disabled: prevIsDisable,
        })}
        onClick={handlePrevPaginate}
      />
      {result.map((number) => (
        <span
          key={number}
          className={cn('item', { active: number === currentPage }, { dots: number === '...' })}
          onClick={() => updatePageNumbers(currentIndex, pageNumbers, number)}
        >
          {number}
        </span>
      ))}
      <button
        className={cn('control-button next', {
          _disabled: nextIsDisable,
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
  currentPage: number,
}

export default styled(Pagination)`
  ${styles}
`
