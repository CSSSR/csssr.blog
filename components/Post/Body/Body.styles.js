import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin: 0 auto;
  }

  & > .text_regular_m:first-of-type strong:first-of-type {
    font-family: "Amita";
    font-style: normal;
    font-weight: normal;
    font-size: ${calcRem(76)};
    line-height: ${calcRem(32)};
    padding-top: ${calcRem(20)};
    padding-right: ${calcRem(7)};
    padding-left: ${calcRem(4)};
    float: left;
  }

  .heading_regular_s {
    margin-top: ${calcRem(30)};
  }

  .text_regular_m,
  .heading_regular_l,
  .heading_regular_m,
  .heading_regular_s,
  .list_item_s {
    color: #18191B;
  }

  .text_regular_m + .text_regular_m {
    margin-top: 1rem;
  }

  .note + .text_regular_m {
    margin-top: ${calcRem(50)};
  }

  .line-numbers {
    &::after,
    &::before {
      content: none !important;
    }
  }

  .list_item_s {
    padding-left: ${calcRem(9)};

    &:not(:first-of-type) {
      margin-top: ${calcRem(16)};
    }

    &::before {
      width: ${calcRem(4)};
      height: ${calcRem(4)};
      top: 50%;
      background-color: #18191B;
      border: none;
    }
  }

  ${desktop.all} {
    & > .text_regular_m:first-of-type {
      margin-top: 50px;
    }

    .heading_regular_m {
      margin-top: 40px;
      font-weight: 900;
      font-size: 24px;
      line-height: 32px;
    }
  
    .text_regular_m + .heading_regular_m,
    div +  .heading_regular_m {
      margin-top: 50px;
    }

    .heading_regular_s {
      font-weight: 900;
      font-size: 16px;
      line-height: 24px;
    }

    .text_regular_m {
      margin-top: 25px;
    }

    .picture + .text_regular_m {
      margin-top: 30px;
    }

    .heading_regular_s + .text_regular_m {
      margin-top: 15px;
    }

    picture.with_big_margin + .heading_regular_s,
    picture.with_big_margin + .heading_regular_m,
    picture.with_big_margin + .text_regular_m {
      margin-top: 50px;
    }

    .text_regular_m,
    .heading_regular_l,
    .heading_regular_m,
    .heading_regular_s,
    .list_s {
      grid-column: 4 / span 6;
    }

    .line-numbers {
      margin-top: 50px !important;
      grid-column: 3 / span 8;
    }
  }

  ${tablet.all} {
    & > .text_regular_m:first-of-type  {
      margin-top: ${calcRem(62)};
    }

    & > .text_regular_m:first-of-type strong:first-of-type {
      padding-right: ${calcRem(11)};
      padding-left: ${calcRem(2)};
    }

    .heading_regular_m {
      margin-top: ${calcRem(30)};
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
    }

    .heading_regular_s {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }

    .text_regular_m {
      margin-top: ${calcRem(15)};
    }

    .text_regular_m + .text_regular_m {
      margin-top: ${calcRem(9)};
    }

    .picture + .text_regular_m {
      margin-top: ${calcRem(30)};
    }

    picture.with_big_margin + .heading_regular_s,
    picture.with_big_margin + .heading_regular_m,
    picture.with_big_margin + .text_regular_m {
      margin-top: ${calcRem(40)};
    }

    .list_item_s {
      padding-left: ${calcRem(9)};

      &:not(:first-of-type) {
        margin-top: ${calcRem(8)};
      }

      &::before {
        top: calc(50% - ${calcRem(2)});
      }
    }

    .text_regular_m,
    .heading_regular_l,
    .heading_regular_m,
    .heading_regular_s,
    .list_s {
      grid-column: 3 / span 8;
    }

    .line-numbers {
      margin-top: 2.5rem !important;
      grid-column: 2 / span 10;
    }
  }

  ${mobile.all} {
    & > .text_regular_m:first-of-type  {
      margin-top: ${calcRem(40)};
    }

    & > .text_regular_m:first-of-type strong:first-of-type {
      padding-right: ${calcRem(11)};
    }

    .heading_regular_m {
      margin-top: ${calcRem(30)};
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
    }

    .heading_regular_s {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }

    .text_regular_m {
      margin-top: ${calcRem(15)};
    }

    .picture + .text_regular_m {
      margin-top: ${calcRem(20)};
    }

    picture.with_big_margin + .heading_regular_s,
    picture.with_big_margin + .heading_regular_m,
    picture.with_big_margin + .text_regular_m {
      margin-top: ${calcRem(30)};
    }

    .list_item_s {
      padding-left: ${calcRem(9)};

      &:not(:first-of-type) {
        margin-top: ${calcRem(8)};
      }

      &::before {
        top: calc(50% - ${calcRem(2)});
      }
    }

    .text_regular_m,
    .heading_regular_l,
    .heading_regular_m,
    .heading_regular_s,
    .list_s,
    .line-numbers {
      grid-column: 1 / span 6;
    }

    .line-numbers {
      margin-top: 3.125rem !important;
    }
  }
`

export default props => {
  const { theme: { breakpoints } } = props

  return css`
    ${base({ breakpoints })}
  `
}
