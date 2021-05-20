import { css } from '@emotion/react'

import { calcRem } from '../../../utils/style/calcRem'

const base = ({breakpoints: { desktop, tablet, mobile }}) => css`

  & {
    display: block;

    img {
      width: 100%;
      height: 100%;
    }
  }

  ${mobile.all} {
    & {
      width: ${calcRem(160)};
      height: ${calcRem(51)};
    }
  }

  ${tablet.all} {
    & {
      width: ${calcRem(384)};
      height: ${calcRem(226)};
      margin-top: ${calcRem(32)};
    }
  }

  ${desktop.all} {
    & {
      height: 358px;
      margin-top: 32px;
    }
  }

  ${desktop.s} {
    & {
      width: 608px;
    }
  }

  ${desktop.m} {
    & {
      width: 656px;
    }
  }

  ${desktop.l} {
    & {
      width: 880px;
      height: 506px;
    }
  }
`

const StyledErrorLeftContent = props => {
  const { breakpoints } = props.theme

  return css`
    ${base({ breakpoints })}
  `
}

export default StyledErrorLeftContent
