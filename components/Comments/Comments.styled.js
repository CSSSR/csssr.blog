import { css } from '@emotion/core'

const base = ({ breakpoints: { mobile, tablet } }) => css`
  & {
    margin-top: 32px;
    grid-column: 4 / span 6;
  }

  &.commento-root {
    .commento-error-box {
      height: 64px;
      border: 1px solid red;
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

export default (props) => {
  const {
    theme: { breakpoints },
  } = props

  return css`
    ${base({ breakpoints })}
  `
}
