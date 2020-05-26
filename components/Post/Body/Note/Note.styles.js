import { css } from "@emotion/core";
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-top: ${calcRem(50)};
    margin-bottom: ${calcRem(50)};
    padding: ${calcRem(50)} ${calcRem(112)};
    background-color: #F1F2F7;

    & * {
      color: #18191B !important;
    }
  }

  ${desktop.all} {
    grid-column: 3 / span 8;
  }

  ${tablet.all} {
    & {
      grid-column: 2 / span 10;
      margin-top: ${calcRem(30)};
      padding-top: ${calcRem(40)};
      padding-right: ${calcRem(80)};
      padding-bottom: ${calcRem(40)};
      padding-left: ${calcRem(80)};
    }
  }

  ${mobile.all} {
    & {
      grid-column: 1 / span 6;
      width: 100vw;
      margin-top: ${calcRem(50)};
      padding: ${calcRem(24)} ${calcRem(16)};
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }

`

export default props => {
  const { theme: { breakpoints }} = props

  return css`
    ${base({ breakpoints })}
  `
}
