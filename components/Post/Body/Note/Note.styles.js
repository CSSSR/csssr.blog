import { css } from '@emotion/react';
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-top: ${calcRem(50)};
    padding-top: ${calcRem(50)};
    padding-right:${calcRem(112)};
    padding-bottom: ${calcRem(50)};
    padding-left:${calcRem(112)};
    background-color: #F1F2F7;

    & * {
      color: #18191B;
    }

    .heading_regular_s {
      margin-top: 0;
    }

    & > p:only-child {
      margin-top: 0;
    }
  }

  ${desktop.all} {
    grid-column: 3 / span 8;

    &.is_quote_like {
      grid-column: 4 / span 6;
    }
  }

  ${tablet.all} {
    & {
      grid-column: 2 / span 10;
      margin-top: ${calcRem(30)};
      padding-top: ${calcRem(40)};
      padding-right: ${calcRem(80)};
      padding-bottom: ${calcRem(40)};
      padding-left: ${calcRem(80)};
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }
  }

  ${mobile.all} {
    & {
      grid-column: 1 / span 6;
      width: 100vw;
      margin-top: ${calcRem(50)};
      padding-top: ${calcRem(24)};
      padding-right: ${calcRem(16)};
      padding-bottom: ${calcRem(24)};
      padding-left: ${calcRem(16)};
      margin-left: 50%;
      transform: translateX(-50%);
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
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
