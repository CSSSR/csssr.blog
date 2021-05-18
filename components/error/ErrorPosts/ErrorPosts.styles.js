import { css } from '@emotion/react'

import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`

  ${mobile.all} {
    & {
      display: grid;
      grid-row-gap: ${calcRem(50)};
      margin-top: ${calcRem(44)};
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(13)};
      display: grid;
      grid-template-columns: repeat(2, ${calcRem(264)});
      grid-column-gap: ${calcRem(16)};
      grid-row-gap: ${calcRem(40)};
    }
  }

  ${desktop.all} {
    & {
      margin-top: 18px;
      display: grid;
      grid-template-columns: repeat(2, 264px);
      grid-column-gap: ${calcRem(16)};
      grid-row-gap: ${calcRem(40)};
    }
  }

  ${desktop.m} {
    & {
      grid-column-gap: ${calcRem(24)};
    }
  }

  ${desktop.l} {
    & {
      grid-column-gap: ${calcRem(32)};
    }
  }
`

const StyledErrorPosts = props => {
  const { theme: { breakpoints, colors } } = props

  return css`
    ${base({ breakpoints, colors })}

  `
}

export default StyledErrorPosts
