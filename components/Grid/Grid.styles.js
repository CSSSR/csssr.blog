import { css } from '@emotion/react'

const base = ({ breakpoints: { desktop }}) => css`

  ${desktop.l} {
    grid-template-columns: repeat(12,96px);
    grid-gap: 0 16px;
    width: 1328px;
  }
`
const StyledGrid = props => {
  const { theme: { breakpoints } } = props

  return css`
    ${base({ breakpoints })}
  `
}

export default StyledGrid
