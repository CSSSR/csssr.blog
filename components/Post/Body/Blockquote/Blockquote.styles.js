import { css } from '@emotion/react';
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet }}) => css`
  & {
    padding-top: ${calcRem(20)};
    padding-bottom: ${calcRem(5)};
    grid-column: 4 / span 6;

    blockquote {
      border-left: 4px solid  #E0E4EC;
      padding-top: ${calcRem(18)};
      padding-bottom: ${calcRem(18)};
      padding-left: ${calcRem(20)};

      & > *:first-of-type {
        margin-top: 0;
        padding-top: 0;
      }

      & > *:last-of-type {
        padding-bottom: 0;
      }
    }
  }

  ${tablet.all} {
    & {
      grid-column: 3 / span 8;
    }
  }

  ${mobile.all} {
    & {
      grid-column: 1 / span 6;
    }
  }

`

export default props => {
  const { theme: { breakpoints }} = props

  return css`
    ${base({ breakpoints })}
  `
}
