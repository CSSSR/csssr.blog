import { string, bool } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Quote.styles'
import { Grid } from '@csssr/core-design'
import { useTheme } from 'emotion-theming'

const Quote = ({ className, imgName, children, author, position, withImage }) => {
  const theme = useTheme()

  return (
    <Grid className={className}>
      {withImage && (
        <picture className="image-wrapper">
          <source
            media={theme.breakpoints.desktop.all.slice(7)}
            type="image/png"
            srcSet={`/assets/blog/components/quote/images/desktop.all/${imgName}.png`}
          />

          <source
            media={theme.breakpoints.tablet.all.slice(7)}
            type="image/png"
            srcSet={`/assets/blog/components/quote/images/tablet.all/${imgName}.png`}
          />

          <source
            media={theme.breakpoints.mobile.all.slice(7)}
            type="image/png"
            srcSet={`/assets/blog/components/quote/images/mobile.all/${imgName}.png`}
          />

          <img src={`/assets/blog/components/quote/images/desktop.all/${imgName}.png`} alt="lady"></img>
        </picture>
      )}

      <blockquote className="quote">
        <p className="quote-text font_p16-regular">{children}</p>
        <span className="author font_h3-regular ">{author}</span>
        <span className="autor-post font_perforator-10-regular">{position}</span>
      </blockquote>
    </Grid>
  )
}

Quote.propTypes = {
  className: string,
  imgName: string,
  quoteText: string,
  quoteAuthor: string,
  authorPost: string,
  withImage: bool,
}

export default styled(Quote)`
  ${styles}
`
