import { css } from '@emotion/react'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
  }

  &.type_news {
    background-image: linear-gradient(to right, white, white), url(${require('../../public/components/post/news-post-header-bg_desktop.svg').default});
    background-size: 880px 232px, 1920px 408px;
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

    &.type_news {
      background-image: linear-gradient(to right, white, white), url(${require('../../public/components/post/news-post-header-bg_desktop.svg').default});
      background-size: 880px 232px, 1920px 408px;
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

    &.type_news {
      padding-top: ${calcRem(78)};
      background-position: center ${calcRem(78)}, center ${calcRem(-70)};
      background-size: ${calcRem(782)} ${calcRem(232)}, 100% ${calcRem(355)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(56)};
      background-image: url(${require('../../public/components/post/post-header-bg.svg').default});
      background-size: auto ${calcRem(187)};
      background-repeat: repeat-x;
    }

    &.type_news {
      padding-top: ${calcRem(155)};
      background-image: url(${require('../../public/components/post/news-post-header-bg_mobile.svg').default});
      background-position: 0 ${calcRem(-57)};
      background-size: 100% ${calcRem(174)};
    }
  }
`

const StyledPost = props => {
  const { theme: { breakpoints, colors }} = props

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledPost
