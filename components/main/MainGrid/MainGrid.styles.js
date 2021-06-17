import { css } from '@emotion/react'

import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile } }) => css`
  & {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(12, ${calcRem(56)});
    grid-gap: 0 ${calcRem(24)};
    width: ${calcRem(936)};
  }

  ${mobile.all} {
    grid-template-columns: repeat(6, 3rem);
    grid-gap: 0 0.5rem;
    width: 20.5rem;
  }
`

const StyledMainGrid = (props) => {
  const {
    theme: { breakpoints },
  } = props

  return css`
    ${base({ breakpoints })}
  `
}

export default StyledMainGrid
