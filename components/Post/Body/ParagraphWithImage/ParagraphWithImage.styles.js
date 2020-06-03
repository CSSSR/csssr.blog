import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    margin-top: ${calcRem(50)};
    grid-column: 4 / span 6;
  }

  .heading_regular_m,
  .heading_regular_s,
  .text_regular_m {
    margin-top: 0;
  }

  .text_regular_m + .text_regular_m {
    margin-top: 25px;
  }

  .heading_regular_s + .text_regular_m {
    margin-top: 20px;
  }

  .img-wrap {
    display: block;
    float: left;
    margin-top: 0;
    margin-right: 16px;
    grid-column: none;

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
      /* TODO: убрать фиксированную ширину когда появятся адаптивные изображения */
      width: ${calcRem(184)};
      margin-right: ${calcRem(40)};
    }

    .text_regular_m + .text_regular_m {
      margin-top: 0.9375rem;
    }

    .heading_regular_s + .text_regular_m {
      margin-top: ${calcRem(15)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(30)};
      grid-column: 1 / span 6;
    }

    .img-wrap {
      /* TODO: убрать фиксированную ширину когда появятся адаптивные изображения */
      width: ${calcRem(104)};
      margin-right: ${calcRem(8)};
    }

    .heading_regular_s + .text_regular_m {
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
