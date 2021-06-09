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
    padding-top: ${calcRem(5)};
    padding-bottom: ${calcRem(5)};
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
      grid-column: 4 / span 6;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(60)};
      grid-column: 3 / span 8;
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
      margin-top: 0;
      grid-column: 1 / span 6;
    }

    &.size_s {
      padding-top: ${calcRem(5)};
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
