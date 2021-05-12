import { css } from '@emotion/react';
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }}) => css`
  & {
    color: #18191B;
    grid-column: 4 / span 6;

    a {
      font-size: inherit;
      line-height: inherit;
    }
  }

  h1&, h2& {
    padding-top: ${calcRem(55)};
    padding-bottom: ${calcRem(5)};
  }

  h3& {
    padding-top: ${calcRem(45)};
    font-size: ${calcRem(18)};
  }

  h4&, h5&, h6& {
    padding-top: ${calcRem(45)};
  }

  ${mobile.all} {
    & {
      grid-column: 1 / span 6;
    }

    h2& {
      font-size: ${calcRem(22)};
      line-height: ${calcRem(32)};
      padding-top: ${calcRem(45)};
    }

    h3& {
      padding-top: ${calcRem(35)};
      font-size: ${calcRem(18)};
    }

    h4&, h5&, h6& {
      padding-top: ${calcRem(35)};
    }
  }

`

const HeadingStyles =  props => {
  const { theme: { breakpoints }} = props

  return css`
    ${base({ breakpoints })}
  `
}

export default HeadingStyles
