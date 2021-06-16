import styled from '@emotion/styled'
import cn from 'classnames'
import { func, number, string } from 'prop-types'
import React from 'react'

import styles from './Dots.styles'

const Dots = ({ className, activeIndex, onClick, slidesCount }) => {
  return (
    <div className={className} data-testid="SelectedPosts:block:slider.dots">
      {[...Array(slidesCount)].map((_item, index) => (
        <button
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={cn('dot', { active: activeIndex === index })}
          type="button"
          onClick={() => onClick(index)}
          data-testid={`SelectedPosts:button:slider.dot.${index}`}
        />
      ))}
    </div>
  )
}

Dots.propsTypes = {
  className: string,
  slidesCount: number,
  activeIndex: number,
  onClick: func,
}

export default styled(Dots)`
  ${styles}
`
