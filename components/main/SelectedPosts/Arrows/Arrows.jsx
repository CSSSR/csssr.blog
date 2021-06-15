import styled from '@emotion/styled'
import { func, string } from 'prop-types'
import React from 'react'

import { ReactComponent as Arrow } from '../../../../public/components/arrows/arrow-right.svg'

import styles from './Arrows.styles'

const Arrows = ({ className, onNext, onPrev }) => {
  return (
    <div className={className}>
      <button
        className="button-prev"
        type="button"
        onClick={onPrev}
        data-testid="SelectedPosts:button:slider.prev"
      >
        <Arrow className="icon" />
      </button>

      <button
        className="button-next"
        type="button"
        onClick={onNext}
        data-testid="SelectedPosts:button:slider.next"
      >
        <Arrow className="icon" />
      </button>
    </div>
  )
}

Arrows.propsTypes = {
  className: string,
  onNext: func,
  onPrev: func,
}

export default styled(Arrows)`
  ${styles}
`
