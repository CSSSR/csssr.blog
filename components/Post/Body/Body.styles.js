import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, above, mobile }}) => css`
  & {
    margin: 0 auto;
  }

  em {
    font-weight: normal;
  }

  strong, strong > em {
    font-weight: bold;
  }

  .list_item_s {
    color: #18191B;
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

  a.no-dot {
    &::after {
      display: none;
    }
  }

  ${desktop.all} {
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

    hr.grid-element  {
      margin-top: ${calcRem(15)};
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
    hr.grid-element {
      margin-top: ${calcRem(15)};
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
const StyledBody = props => {
  const { theme: { breakpoints } } = props

  return css`
    ${base({ breakpoints })}
  `
}

export default StyledBody
