import React from 'react'
import { string, node } from 'prop-types'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import styles from './ParagraphWithImage.styles'

const ParagraphWithImage = ({ children, className, imgName }) => {
  const theme = useTheme()

  return (
    <div className={className}>
      <picture className="img-wrap">
        <source
          media={theme.breakpoints.desktop.all.slice(7)}
          type="image/png"
          srcSet={`/assets/blog/posts/desktop.all/${imgName}.png`}
        />

        <source
          media={theme.breakpoints.tablet.all.slice(7)}
          type="image/png"
          srcSet={`/assets/blog/posts/tablet.all/${imgName}.png`}
        />

        <img src={`/assets/blog/posts/mobile.all/${imgName}.png`} alt={imgName} />
      </picture>
      {children}
    </div>
  )
}

ParagraphWithImage.propTypes = {
  className: string,
  imgName: string,
  children: node,
}

export default styled(ParagraphWithImage)`
  ${styles}
`
