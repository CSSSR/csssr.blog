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
    margin-top: 25px;
  }

  .heading_regular_s + .text_regular_m {
    margin-top: 20px;
  }

  .newsHeading_regular_s + .text_regular_m {
    margin-top: 15px;
  }

  .img-wrap {
    display: block;
    width: ${calcRem(184)};
    min-height: ${calcRem(144)};
    float: left;
    margin-top: 0;
    margin-right: 16px;
    grid-column: none;

    img {
      width: 100%;
      height: auto;
    }
  }

  &.newsParagraphWithImage {
    margin-top: ${calcRem(70)};
  }

  &.newsParagraphWithImage .img-wrap {
    min-height: auto;
    float: right;
    margin-right: 0;
    margin-left: ${calcRem(40)};
  }

  ${desktop.all} {
    .heading_regular_m + .text_regular_m {
      margin-top: 20px
    }

    &.newsParagraphWithImage .img-wrap {
      transform: translateX(-32px);
    }

    &.newsParagraphWithImage + .text_regular_m {
      margin-top: 20px;
    }

    &.newsParagraphWithImage .heading_regular_s {
      font-size: 18px;
      line-height: 24px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(30)};
      grid-column: 3 / span 8;
    }

    &.newsParagraphWithImage {
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

    &.newsParagraphWithImage .heading_regular_s {
      margin-top: 0;
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
    }

    &.newsParagraphWithImage > .text_regular_m {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(30)};
      grid-column: 1 / span 6;
    }

    &.newsParagraphWithImage {
      margin-top: ${calcRem(50)};
    }

    .img-wrap {
      /* TODO: убрать фиксированную ширину когда появятся адаптивные изображения */
      width: ${calcRem(104)};
      min-height: ${calcRem(72)};
      margin-right: ${calcRem(8)};
    }

    &.newsParagraphWithImage .img-wrap {
      margin-top: ${calcRem(7)};
      margin-left: ${calcRem(6)};
    }

    .heading_regular_m + .text_regular_m.paragraph {
      margin-top: ${calcRem(15)};
    }

    .heading_regular_s + .text_regular_m {
      margin-top: ${calcRem(15)};
    }

    &.newsParagraphWithImage .heading_regular_s {
      margin-top: 0;
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
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
