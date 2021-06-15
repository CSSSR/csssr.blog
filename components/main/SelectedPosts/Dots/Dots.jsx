import styled from '@emotion/styled'
import cn from 'classnames'
import { func, number, string } from 'prop-types'
import React from 'react'

import styles from './Dots.styles'

const Dots = ({ className, activeIndex, onClick, slidesAmount }) => {
  return (
    <div className={className} data-testid="SelectedPosts:block:slider.dots">
      {[...Array(slidesAmount).keys()].map((item) => (
        <button
          // eslint-disable-next-line react/no-array-index-key
          key={item}
          className={cn('dot', { active: activeIndex === item })}
          type="button"
          onClick={() => onClick(item)}
          data-testid={`SelectedPosts:button:slider.dot.${item}`}
        />
      ))}
    </div>
  )
}

Dots.propsTypes = {
  className: string,
  slidesAmount: number,
  activeIndex: number,
  onClick: func,
}

export default styled(Dots)`
  ${styles}
`
