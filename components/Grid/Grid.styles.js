import { css } from '@emotion/core'

const base = ({ breakpoints: { desktop }}) => css`
  ${desktop.m} {
    grid-template-columns: repeat(12,96px);
    grid-gap: 0 16px;
    width: 1328px;
  }

  ${desktop.l} {
    grid-template-columns: repeat(12,96px);
    grid-gap: 0 16px;
    width: 1328px;
  }
`

export default props => {
  const { theme: { breakpoints } } = props

  return css`
    ${base({ breakpoints })}
  `
}
