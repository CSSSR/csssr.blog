import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    margin-top: ${calcRem(50)};
    grid-column: 4 / span 6;
  }

  .heading_regular_m {
    margin-top: 0;
  }

  .img-wrap {
    width: ${calcRem(270)};
    float: left;
    margin-right: 17px;
    margin-bottom: 4px;

    img {
      width: 100%;
      height: auto;
    }
  }

  ${desktop.all} {
    .heading_regular_m + .text_regular_m {
      margin-top: 20px
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(30)};
      grid-column: 3 / span 8;
    }

    .img-wrap {
      width: ${calcRem(184)};
      margin-right: ${calcRem(40)};
      margin-bottom: ${calcRem(7)};
    }

    .heading_regular_m + .text_regular_m {
      margin-top: ${calcRem(15)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(30)};
      grid-column: 1 / span 6;
    }

    .img-wrap {
      width: ${calcRem(104)};
      margin-right: ${calcRem(8)};
      margin-bottom: ${calcRem(7)};
    }

    .heading_regular_m + .text_regular_m {
      margin-top: ${calcRem(15)};
    }
  }
`

export default (props) => {
  const {
    theme: { breakpoints},
  } = props

  return css`
    ${base({ breakpoints })}
  `
}
