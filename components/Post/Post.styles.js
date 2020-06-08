import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    overflow-x: hidden;
  }

  ${desktop.all} {
    & {
      padding-top: 192px;
      background-image: linear-gradient(to right, white, white), url(${require('../../public/components/post/post-header-bg.svg').default});
      background-repeat: no-repeat, repeat-x;
      background-position: center 192px, center top;
    }
  }

  ${desktop.l} {
    & {
      background-size: 1184px 232px, 1360px 408px;
    }
  }

  ${desktop.m} {
    & {
      background-size: 880px 232px, 1360px 408px;
    }
  }

  ${desktop.s} {
    & {
      background-size: 816px 232px, 1360px 408px;
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(142)};
      background-image: linear-gradient(to right, white, white), url(${require('../../public/components/post/post-header-bg.svg').default});
      background-position: center ${calcRem(142)}, center top;
      background-size: ${calcRem(782)} ${calcRem(232)}, auto ${calcRem(307)};
      background-repeat: no-repeat, repeat-x;
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(128)};
      background-image: url(${require('../../public/components/post/post-header-bg.svg').default});
      background-size: auto ${calcRem(250)};
      background-repeat: repeat-x;
    }
  }
`

export default props => {
  const { theme: { breakpoints, colors }} = props

  return css`
    ${base({ breakpoints, colors })}
  `
}
