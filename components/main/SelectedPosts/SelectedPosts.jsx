import styled from '@emotion/styled'
import { arrayOf, object, shape, string } from 'prop-types'
import React, { useState } from 'react'

import MainGrid from '../MainGrid'

import Arrows from './Arrows'
import Dots from './Dots'
import styles from './SelectedPosts.styles'
import Slide from './Slide'

const SelectedPosts = ({ className, posts, language }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState('left')
  const [clientXStart, setClientXStart] = useState(0)
  const slidesCount = posts.length

  const goToSlide = (index) => {
    setActiveIndex((prevActiveIndex) => {
      if (index === slidesCount) {
        return 0
      }

      if (prevActiveIndex === 0 && index < 0) {
        return slidesCount - 1
      }

      return index
    })
  }

  const handleNext = () => {
    goToSlide(activeIndex + 1)
    setDirection('left')
  }

  const handlePrev = () => {
    goToSlide(activeIndex - 1)
    setDirection('right')
  }

  const handleTouchStart = (event) => {
    const { clientX } = event.changedTouches[0]
    setClientXStart(clientX)
  }

  const handleTouchEnd = (event) => {
    const { clientX } = event.changedTouches[0]
    if (clientX < clientXStart) {
      handleNext()
    } else {
      handlePrev()
    }
  }

  return (
    <div className={className}>
      <MainGrid data-testid="SelectedPosts:block" className="wrap">
        <ul
          className="slider"
          data-testid="SelectedPosts:block:slider"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {posts.map((post, index) => (
            <Slide
              key={post.slug}
              post={post}
              language={language}
              activeIndex={activeIndex}
              slideIndex={index}
              direction={direction}
            />
          ))}
        </ul>

        <Arrows className="arrows" onNext={handleNext} onPrev={handlePrev} />

        <Dots
          className="dots"
          activeIndex={activeIndex}
          slidesCount={slidesCount}
          onClick={goToSlide}
        />
      </MainGrid>
    </div>
  )
}

SelectedPosts.propsTypes = {
  className: string,
  language: string,
  posts: arrayOf(
    shape({
      title: string,
      date: string,
      slug: string,
      content: string,
      tag: string,
      coverImageAlt: string,
      images: object,
    }),
  ),
}

export default styled(SelectedPosts)`
  ${styles}
`
