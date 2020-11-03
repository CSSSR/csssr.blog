import { css } from '@emotion/core'
import { calcRem } from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    background-color: #0076ff;
    height: 2px;
    will-change: width, transform;
    transition: width 300ms ease, transform 300ms ease;
  }

  ${desktop.all} {
    & {
      bottom: 2px;
    }
  }

  ${tablet.all} {
    bottom: ${calcRem(2)};
  }

  ${mobile.all} {
    & {
      height: ${calcRem(2)};
    }
  }
`

const dynamic = ({ width, left }) => {
  return css`
     & {
      width: ${width || 0}px;
      transform: translateX(${left || 0}px);
     }
  `
}

export default props => {
  const { breakpoints } = props.theme
  const { width, left } = props

  return css`
    ${base({ breakpoints })}
    ${dynamic({ width, left })}
  `
}
