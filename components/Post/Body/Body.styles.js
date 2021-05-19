import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, above, mobile }}) => css`
  @font-face {
    font-family: 'Roboto Mono';
    src: url('https://static.csssr.com/fonts-subsets/RobotoMono-Regular-c628ba94.woff2');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Roboto Mono';
    src: url('https://static.csssr.com/fonts-subsets/RobotoMono-Bold-c00db536.woff2');
    font-weight: 600;
  }

  & {
    margin: 0 auto;
  }

  em {
    font-weight: normal;
  }

  strong, strong > em {
    font-weight: bold;
  }

  code:not([class^="lang"]) {
    font-family: Roboto Mono, monospace;
    background-color: #F5F6FA;
    padding-left: ${calcRem(3)};
    padding-right: ${calcRem(3)};
  }

  .list_item_s {
    color: #18191B;
  }

  .note + .text_regular_m {
    margin-top: ${calcRem(50)};
  }

  .line-numbers {
    margin-top: ${calcRem(20)};
    margin-bottom: ${calcRem(5)};

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

    .grid-element,
    .compare,
    .line-numbers {
      grid-column: 4 / span 6;
    }
  }

  ${tablet.all} {

    hr.grid-element  {
      margin-top: ${calcRem(15)};
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

    .grid-element,
    .compare,
    .line-numbers {
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

    .list_item_s {
      padding-left: ${calcRem(9)};

      &:not(:first-of-type) {
        margin-top: ${calcRem(8)};
      }

      &::before {
        top: calc(50% - ${calcRem(2)});
      }
    }

    .line-numbers {
      margin-top: ${calcRem(15)};
    }

    .line-numbers,
    .grid-element,
    .compare {
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

export const getInitialLetterStyles = ({ breakpoints: { mobile }, language }) =>  css`
  & > p:first-of-type strong:first-of-type {
    padding-right: ${language === 'ru' ? calcRem(23) : calcRem(7)};
    font-family: ${language === 'ru' ? 'Sweet Mavka Script' : 'Amita'};
    font-style: normal;
    font-weight: normal;
    font-size: ${calcRem(76)};
    line-height: ${calcRem(32)};
    padding-top: ${calcRem(20)};
    padding-left: ${calcRem(4)};
    float: left;
  }

  ${mobile.all} {
    & > p:first-of-type strong:first-of-type {
      padding-right: ${calcRem(11)};
      font-size: ${calcRem(64)};
      line-height: ${calcRem(32)};
    }
  }
`

const StyledBody = props => {
  const { theme: { breakpoints }, language } = props

  return css`
    ${base({ breakpoints })}
    ${getInitialLetterStyles({language, breakpoints})}
  `
}

export default StyledBody
