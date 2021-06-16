import styled from '@emotion/styled'
import { arrayOf, object, shape, string } from 'prop-types'
import React, { useRef, useState } from 'react'

import MainGrid from '../MainGrid'

import Arrows from './Arrows'
import Dots from './Dots'
import styles from './SelectedPosts.styles'
import Slide from './Slide'

const SelectedPosts = ({ className, posts, language }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const clientXStartRef = useRef()
  const directionRef = useRef()
  const slidesAmount = posts.length

  const goToSlide = (index) => {
    setActiveIndex(() => {
      if (index === slidesAmount) {
        return 0
      }

      if (index < 0) {
        return slidesAmount - 1
      }

      return index
    })
  }

  const handleNext = () => {
    goToSlide(activeIndex + 1)
    directionRef.current = 'left'
  }

  const handlePrev = () => {
    goToSlide(activeIndex - 1)
    directionRef.current = 'right'
  }

  const handleTouchStart = (event) => {
    const { clientX } = event.changedTouches[0]
    clientXStartRef.current = clientX
  }

  const handleTouchEnd = (event) => {
    const { clientX } = event.changedTouches[0]
    if (clientX < clientXStartRef.current) {
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
              isActive={activeIndex === index}
              direction={directionRef.current}
            />
          ))}
        </ul>

        <Arrows className="arrows" onNext={handleNext} onPrev={handlePrev} />

        <Dots
          className="dots"
          activeIndex={activeIndex}
          slidesAmount={slidesAmount}
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
