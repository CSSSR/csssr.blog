import { css } from '@emotion/react'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet } }) => css`
  & {
    grid-column: 4 / span 6;
    padding-bottom: ${calcRem(30)};
    border: none;
  }

  ${mobile.all} {
    & {
      grid-column: 1 / span 6;
      padding-bottom: ${calcRem(25)};
    }
  }

  ${tablet.all} {
    & {
      grid-column: 3 / span 8;
    }
  }
`

export default props => {
  const { breakpoints } = props.theme

  return css`
    ${base({ breakpoints })}
  `
}
