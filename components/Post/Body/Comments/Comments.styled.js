import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet } }) => css`
  & {
    margin-top: 100px;
    grid-column: 4 / span 6;
  }

  .title {
    margin-bottom: 48px;
  }

  .commento-root {
    .commento-error-box {
      height: 64px;
      border: 1px solid red;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(64)};
      grid-column: 3 / span 8;
    }

    .title {
      margin-bottom: ${calcRem(48)};
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
