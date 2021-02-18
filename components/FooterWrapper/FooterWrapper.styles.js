import { css } from '@emotion/react'

const base = () => css``

export default  props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
