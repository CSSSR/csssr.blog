import { css } from '@emotion/react'

import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, above, mobile }}) => css`
  & {
    margin: 0 auto;
  }

  & > .text_regular_m:first-of-type strong:first-of-type {
    font-style: normal;
    font-weight: normal;
    font-size: ${calcRem(76)};
    line-height: ${calcRem(32)};
    padding-top: ${calcRem(20)};
    padding-left: ${calcRem(4)};
    float: left;
  }

  em {
    font-weight: normal;
  }

  strong, strong > em {
    font-weight: bold;
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

  .text_regular_m a {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }

  .text_regular_m + .text_regular_m {
    margin-top: 1rem;
  }

  .note + .text_regular_m {
    margin-top: ${calcRem(50)};
  }

  .line-numbers {
    margin-top: ${calcRem(30)};

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

  .hr {
    text-align: center;
  }

  .compare {
    margin-top: 0.9375rem;
  }

  .compare-item {
    display: block;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .compare-item.pros {
    color:  #6364D1;
  }

  .compare-item.cons {
    color: #18191B;
  }

  .no-wrap,
  code {
    white-space: nowrap;
  }

  .heading_regular_l,
  .heading_regular_m,
  .heading_regular_s {
    .link_list_s {
      font-size: inherit;
      line-height: inherit;
    }
  }

  a.no-dot {
    &::after {
      display: none;
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

    .text_regular_m,
    hr.grid-element  {
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
    .list_s,
    .grid-element,
    .compare,
    .line-numbers {
      grid-column: 4 / span 6;
    }
  }


  blockquote {
    margin-top: ${calcRem(50)};
    margin-bottom: ${calcRem(42)};
    padding-left: ${calcRem(20)};
    padding-top: ${calcRem(18)};
    padding-bottom: ${calcRem(18)};
    grid-column: 4 / span 6;
    border-left: 4px solid  #E0E4EC;

    & > .text_regular_m:first-of-type {
      margin-top: 0;
    }

    & + *,
    & + *[class] {
      margin-top: 0;
    }
  }

  ${tablet.all} {
    & > .text_regular_m:first-of-type  {
      margin-top: ${calcRem(30)};
    }

    & > .text_regular_m:first-of-type strong:first-of-type {
      padding-right: ${calcRem(11)};
      padding-left: ${calcRem(2)};
      font-size: ${calcRem(64)};
      line-height: ${calcRem(32)};
    }

    .heading_regular_m {
      margin-top: ${calcRem(30)};
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
    }

    .text_regular_m.is_scaled-down {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }

    .heading_regular_s {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }

    .text_regular_m + .text_regular_m {
      margin-top: ${calcRem(9)};
    }

    .text_regular_m,
    hr.grid-element  {
      margin-top: ${calcRem(15)};
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
    .list_s,
    .grid-element,
    .compare,
    .line-numbers,
    blockquote {
      grid-column: 3 / span 8;
    }
  }

  ${above.mobile} {
    .post-newsletter.hidden_desktop {
      display: none;
    }
  }

  ${mobile.all} {
    & > .text_regular_m:first-of-type  {
      margin-top: ${calcRem(40)};
    }

    & > .text_regular_m:first-of-type strong:first-of-type {
      padding-right: ${calcRem(11)};
      font-size: ${calcRem(64)};
      line-height: ${calcRem(32)};
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

    .text_regular_m,
    hr.grid-element {
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
    .line-numbers,
    .grid-element,
    .compare,
    blockquote {
      grid-column: 1 / span 6;
    }

    .how-close-br {
      display: none;
    }

    .post-newsletter.hidden_mobile {
      display: none;
    }

    .post-newsletter {
      grid-row: unset;
    }
  }
`

const dynamic = (language) =>  css`
  & > .text_regular_m:first-of-type strong:first-of-type {
    padding-right: ${language === 'ru' ? calcRem(23) : calcRem(7)};
    font-family: ${language === 'ru' ? 'Sweet Mavka Script' : 'Amita'};
  }
`

const StyledBody = props => {
  const { theme: { breakpoints }, language } = props

  return css`
    ${base({ breakpoints })}
    ${dynamic(language)}
  `
}

export default StyledBody
