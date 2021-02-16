import { css } from '@emotion/react'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet, desktop }, colors }) => css`
  & {
    display: block;
    background-color: #ffffff;
    margin-top: ${calcRem(60)};
    grid-column: 4 / span 6;
  }

  .title {
    margin-bottom: ${calcRem(-30)};
    color: ${colors.secondary.darken100};
  }

  .commento-root {
    .commento-error-box {
      height: 64px;
      border: 1px solid red;
    }
  }

  ${desktop.all} {
    & {
      margin-top: ${calcRem(80)};
    }
  }

  ${tablet.all} {
    & {
      grid-column: 3 / span 8;
    }

    .title {
      margin-bottom: ${calcRem(-10)};
    }
  }

  ${mobile.all} {
    & {
      grid-column: 1 / span 6;
    }
  }
`

const StyledComments = (props) => {
  const {
    theme: { breakpoints, colors },
  } = props

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledComments
