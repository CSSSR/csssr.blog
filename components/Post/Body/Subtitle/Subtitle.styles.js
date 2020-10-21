import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.all} {
    & {
      margin-top: 66px;
      grid-column: 4 / span 6;
      color: #18191B;
    }

    &.newsSubtitle {
      margin-top: 0;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(38)};
      grid-column: 3 / span 8;
    }

    &.newsSubtitle {
      margin-top: ${calcRem(16)};
      font-size: ${calcRem(24)};
      line-height: ${calcRem(40)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(30)};
      grid-column: 1 / span 6;
    }

    &.newsSubtitle {
      margin-top: ${calcRem(37)};
    }
  }
`


export default  props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
