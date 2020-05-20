import React from 'react'
import { string, node } from 'prop-types'
import styled from '@emotion/styled'
import styles from './ImgLeftSide.styles'

const ImgLeftSide = ({ children, className, imgName }) => {
  return (
    <div className={className}>
      <picture className="img-wrap">
        <source
          media="min-width: 1280px"
          type="image/png"
          srcSet={`/assets/blog/test/desktop.all/${imgName}.png`}
        />

        <source
          media="max-width: 767px"
          type="image/png"
          srcSet={`/assets/blog/test/tablet.all/${imgName}.png`}
        />

        <img src={`/assets/blog/test/mobile.all/${imgName}.png`} alt={imgName} />
      </picture>
      {children}
    </div>
  )
}

ImgLeftSide.propTypes = {
  className: string,
  imgName: string,
  children: node,
}

export default styled(ImgLeftSide)`
  ${styles}
`
