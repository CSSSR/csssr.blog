import { css } from '@emotion/react'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile } }) => css`
  & {
    grid-column: 4 / span 6;
    padding-bottom: ${calcRem(30)};
  }

  ${mobile.all} {
    & {
      grid-column: 1 / span 6;
      padding-bottom: ${calcRem(25)};
    }
  }
`

export default props => {
  const { breakpoints } = props.theme

  return css`
    ${base({ breakpoints })}
  `
}
