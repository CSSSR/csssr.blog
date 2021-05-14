import { css } from '@emotion/react';
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet }}) => css`
  & {
    padding-top: ${calcRem(20)};
    padding-bottom: ${calcRem(5)};
    color: #18191B;
    grid-column: 4 / span 6;

    a {
      font-size: inherit;
      line-height: inherit;
      font-weight: inherit;
    }
  }

  ${tablet.all} {
    & {
      grid-column: 3 / span 8;
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(15)};
      grid-column: 1 / span 6;
    }
  }

`

export default props => {
  const { theme: { breakpoints } } = props

  return css`
    ${base({ breakpoints })}
  `
}
