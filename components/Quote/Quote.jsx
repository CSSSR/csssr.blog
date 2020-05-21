import { string, bool } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Quote.styles'
import { Grid } from '@csssr/core-design'
import { useTheme } from 'emotion-theming'


const Quote = ({ className, imgName, quoteText, quoteAuthor, authorPost, withImage }) => {
  const theme = useTheme()

  return (
    <Grid className={className}>
      {withImage && 
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
      }
      
      <blockquote className="quote">
        <p className="quote-text font_p16-regular">{quoteText}</p>
        <span class="author font_h3-regular ">{quoteAuthor}</span>
        <span class="autor-post font_perforator-10-regular">{authorPost}</span>
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
  withImage: bool
}

export default styled(Quote)`
  ${styles}
`

