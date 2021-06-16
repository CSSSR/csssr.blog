import { css } from '@emotion/react'

import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile } }) => css`
  & {
    padding-top: ${calcRem(128)};
    background-size: ${calcRem(880)} ${calcRem(217)}, ${calcRem(1360)} ${calcRem(345)};
    background-image: linear-gradient(to right, white, white),
      url(${require('../../public/components/post/post-header-bg.svg').default});
    background-repeat: no-repeat, repeat-x;
    background-position: center ${calcRem(128)}, center top;
  }

  &.type_news {
    background-image: linear-gradient(to right, white, white),
      url(${require('../../public/components/post/news-post-header-bg_desktop.svg').default});
  }

  ${mobile.all} {
    & {
      padding-top: 0;
      background: none;
    }

    &.type_news {
      padding-top: ${calcRem(96)};
      background-image: url(${require('../../public/components/post/news-post-header-bg_mobile.svg').default});
      background-position: 0 0;
      background-size: 100% ${calcRem(96)};
      background-repeat: no-repeat, repeat-x;
    }
  }
`

const StyledPost = (props) => {
  const {
    theme: { breakpoints, colors },
  } = props

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledPost
