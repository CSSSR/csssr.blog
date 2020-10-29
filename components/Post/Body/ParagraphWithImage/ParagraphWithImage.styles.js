import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    margin-top: ${calcRem(50)};
    grid-column: 4 / span 6;
  }

  & > ul li {
    display: inline;
  }

  .heading_regular_m,
  .heading_regular_s,
  .text_regular_m {
    margin-top: 0;
  }

  .text_regular_m + .text_regular_m {
    margin-top: ${calcRem(25)};
  }

  .heading_regular_s + .text_regular_m {
    margin-top: ${calcRem(20)};
  }

  .heading_regular_s.is_scaled-down + .text_regular_m {
    margin-top: ${calcRem(15)};
  }

  .heading_regular_s.is_scaled-down {
    white-space: nowrap;
  }

  .img-wrap {
    display: block;
    min-height: ${calcRem(144)};
    float: left;
    margin-top: 0;
    margin-right: ${calcRem(16)};
    grid-column: none;

    img {
      width: 100%;
      height: auto;
    }
  }

  &.with_right-side-image {
    margin-top: ${calcRem(70)};
  }

  .img-wrap.side_right {
    width: ${calcRem(184)};
    min-height: ${calcRem(128)};
    float: right;
    margin-right: 0;
    margin-left: ${calcRem(40)};
  }

  ${desktop.all} {
    .heading_regular_m + .text_regular_m {
      margin-top: 20px
    }

    .img-wrap.side_right {
      transform: translateX(-32px);
    }

    &.with_right-side-image + .text_regular_m {
      margin-top: 20px;
    }

    &.with_right-side-image .heading_regular_s {
      font-size: 18px;
      line-height: 24px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(30)};
      grid-column: 3 / span 8;
    }

    &.with_right-side-image {
      margin-top: ${calcRem(50)};
    }

    .img-wrap {
      /* TODO: убрать фиксированную ширину когда появятся адаптивные изображения */
      width: ${calcRem(184)};
      min-height: ${calcRem(128)};
      margin-right: ${calcRem(40)};
    }

    .text_regular_m + .text_regular_m {
      margin-top: 0.9375rem;
    }

    .heading_regular_s + .text_regular_m {
      margin-top: ${calcRem(15)};
    }

    &.with_right-side-image .heading_regular_s {
      margin-top: 0;
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
    }

    &.with_right-side-image + .text_regular_m.is_scaled-down {
      margin-top: ${calcRem(9)};
    }

    &.with_right-side-image > .text_regular_m {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(30)};
      grid-column: 1 / span 6;
    }

    &.with_right-side-image {
      margin-top: ${calcRem(50)};
    }

    .img-wrap {
      /* TODO: убрать фиксированную ширину когда появятся адаптивные изображения */
      width: ${calcRem(104)};
      min-height: ${calcRem(72)};
      margin-right: ${calcRem(8)};
    }

    .img-wrap.side_right {
      width: auto;
      min-width: ${calcRem(104)};
      max-width: ${calcRem(108)};
      min-height: unset;
      margin-top: ${calcRem(7)};
      margin-left: ${calcRem(6)};
    }

    .heading_regular_m + .text_regular_m.paragraph {
      margin-top: ${calcRem(15)};
    }

    .heading_regular_s + .text_regular_m {
      margin-top: ${calcRem(15)};
    }

    &.with_right-side-image .heading_regular_s {
      margin-top: 0;
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
    }

    &.with_right-side-image + .text_regular_m.is_scaled-down {
      margin-top: ${calcRem(16)};
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
