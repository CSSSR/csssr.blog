import { css } from '@emotion/react'

import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, above, mobile }, colors}) => css`
  & {
    width: 100%;
    font-weight: 400;
    font-style: italic;
    color: ${colors.secondary.darken100}
  }

  &.size_s {
    font-size: ${calcRem(12)};
    line-height: ${calcRem(16)};
  }

  a {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }

  ${desktop.all} {
    & {
      margin-top: 80px;
      grid-column: 4 / span 6; 
    }

    &.size_s {
      margin-top: 15px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(60)};
      grid-column: 3 / span 8;
    }

    &.size_s {
      margin-top: ${calcRem(10)};
    }
  }

  ${above.mobile} {
    &.size_l {
      margin-top: ${calcRem(15)};
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(50)};
      grid-column: 1 / span 6;
    }

    &.size_s {
      margin-top: ${calcRem(10)};
    }

    &.size_l {
      margin-top: ${calcRem(10)};
      font-size: ${calcRem(12)};
      line-height: ${calcRem(16)};
    }
  }
`

const StyledCaption= props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledCaption
