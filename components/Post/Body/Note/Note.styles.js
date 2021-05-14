import { css } from '@emotion/react';
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-left: ${calcRem(-32)};
    margin-right:  ${calcRem(-32)};
    padding-top: ${calcRem(20)};
    padding-bottom: ${calcRem(5)};

    .inner {
      padding-top: ${calcRem(40)};
      padding-bottom: ${calcRem(40)};
      padding-right:${calcRem(32)};
      padding-left:${calcRem(32)};
      background-color: #F1F2F7;

      & > h2:first-of-type:not(p+h2),
      & > h3:first-of-type:not(p+h3),
      & > p:first-of-type:not(h2+p):not(h3+p) {
        padding-top: 0;
      }

      & > p:only-child {
        padding-top: 0;
        padding-bottom: 0;
      }
    }
  }

  ${desktop.all} {
    grid-column: 4 / span 6;
  }

  ${tablet.all} {
    & {
      grid-column: 3 / span 8;

      .inner {
        font-size: ${calcRem(14)};
        line-height: ${calcRem(24)};
      }
    }
  }

  ${mobile.all} {
    & {
      grid-column: 1 / span 6;
      margin-left: ${calcRem(-16)};
      margin-right:  ${calcRem(-16)};
      padding-top: ${calcRem(15)};

      .inner {
        padding-top: ${calcRem(24)};
        padding-bottom: ${calcRem(24)};
        padding-right:${calcRem(16)};
        padding-left:${calcRem(16)};
        font-size: ${calcRem(14)};
        line-height: ${calcRem(24)};
      }
    }
  }
`

const StyledNote = props => {
  const { theme: { breakpoints }} = props

  return css`
    ${base({ breakpoints })}
  `
}

export default StyledNote
