import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Quote.styles'
import { useTheme } from 'emotion-theming'


const Quote = ({children, className, imgName }) => {
  const theme = useTheme()

  return (
    <div className={className}>
      <picture className="image-wrapper">
        <source
          media={theme.breakpoints.desktop.all.slice(7)}
          type="image/png"
          srcSet={`/static/images/quote/desktop.all/${imgName}.png`}
        />

        <source
          media={theme.breakpoints.tablet.all.slice(7)}
          type="image/png"
          srcSet={`/static/images/quote/tablet.all/${imgName}.png`}
        />

        <source
          media={theme.breakpoints.mobile.all.slice(7)}
          type="image/png"
          srcSet={`/static/images/quote/mobile.all/${imgName}.png`}
        />

        <img src={`/static/images/quote/mobile.all/${imgName}.png`} alt="lady"></img>
      </picture>
      <blockquote className="quote">
        {children}
      </blockquote>
    </div>
  )
}

Quote.propTypes = {
  className: string,
}

export default styled(Quote)`
  ${styles}
`

