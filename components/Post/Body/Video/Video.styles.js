import { css } from '@emotion/react'

import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, width, height}) => css`
  & {
    padding-top: ${calcRem(20)};
    padding-bottom: ${calcRem(5)};
    width: 100%;
  }

  &.aspect-ratio-box {
    position: relative;
    padding-top: calc(100% * ${ height / width });
    height: 0;
  }

  .inner-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
  }

  ${desktop.all} {
    & {
      grid-column: 4 / span 6;
    }
  }

  ${tablet.all} {
    & {
      grid-column: 3 / span 8;
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(15)};
      grid-column: 1 / span 6;
      width: 100vw;
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
`

const StyledVideo = props => {
  const breakpoints = props.theme.breakpoints
  const { width, height } = props

  return css`
    ${base({ breakpoints, width, height })}
  `
}

export default StyledVideo
