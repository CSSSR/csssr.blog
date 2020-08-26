import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    overflow-x: hidden;
  }

  ${desktop.all} {
    & {
      padding-top: 128px;
      background-image: linear-gradient(to right, white, white), url(${require('../../public/components/post/post-header-bg.svg').default});
      background-repeat: no-repeat, repeat-x;
      background-position: center 128px, center -64px;
    }
  }

  ${desktop.l} {
    & {
      background-size: 880px 232px, 1360px 408px;
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

const dynamic = (language) => {
  if (language === 'ru') {
    return css`
      @font-face {
        font-family: 'Sweet Mavka Script';
        font-style: normal;
        font-weight: normal;
        src: url('https://static.csssr.com/fonts-subsets/Sweet-Mavka-Script-d25a5d77.woff2') format('woff2');
        font-display: swap;
      }
    `
  }

  return ''
}

export default props => {
  const { theme: { breakpoints, colors }, language} = props

  return css`
    ${base({ breakpoints, colors })}
    ${dynamic(language)}
  `
}
