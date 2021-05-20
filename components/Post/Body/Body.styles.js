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

export const prismMaterialLight = css`
  pre:not([class^="prismjs"]) > code[class*="language-"],
  pre[class*="language-"] {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    color: #90a4ae;
    background: #F1F2F7;
    font-family: Roboto Mono, monospace;
    font-size: 1em;
    line-height: 1.5em;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*="language-"] {
    border-left: 4px solid #7D7FFE;
  }

  code[class*="language-"]::-moz-selection,
  pre[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection,
  pre[class*="language-"] ::-moz-selection {
    background: #cceae7;
    color: #263238;
  }

  code[class*="language-"]::selection,
  pre[class*="language-"]::selection,
  code[class*="language-"] ::selection,
  pre[class*="language-"] ::selection {
    background: #cceae7;
    color: #263238;
  }

  :not(pre) > code[class*="language-"] {
    white-space: normal;
    border-radius: 0.2em;
    padding: 0.1em;
  }

  pre[class*="language-"] {
    overflow: auto;
    position: relative;
    margin: 0.5em 0;
    padding: 1.25em 1em;
  }

  .language-css > code,
  .language-sass > code,
  .language-scss > code {
    color: #f76d47;
  }

  pre[class*="language-"].line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }

  [class*="language-"] .namespace {
    opacity: 0.7;
  }

  .token.atrule {
    color: #7c4dff;
  }

  .token.attr-name {
    color: #39adb5;
  }

  .token.attr-value {
    color: #f6a434;
  }

  .token.attribute {
    color: #f6a434;
  }

  .token.boolean {
    color: #7c4dff;
  }

  .token.builtin {
    color: #39adb5;
  }

  .token.cdata {
    color: #39adb5;
  }

  .token.char {
    color: #39adb5;
  }

  .token.class {
    color: #39adb5;
  }

  .token.class-name {
    color: #6182b8;
  }

  .token.comment {
    color: #aabfc9;
  }

  .token.constant {
    color: #7c4dff;
  }

  .token.deleted {
    color: #e53935;
  }

  .token.doctype {
    color: #aabfc9;
  }

  .token.entity {
    color: #e53935;
  }

  .token.function {
    color: #7c4dff;
  }

  .token.hexcode {
    color: #f76d47;
  }

  .token.id {
    color: #7c4dff;
    font-weight: bold;
  }

  .token.important {
    color: #7c4dff;
    font-weight: bold;
  }

  .token.inserted {
    color: #39adb5;
  }

  .token.keyword {
    color: #7c4dff;
  }

  .token.number {
    color: #f76d47;
  }

  .token.operator {
    color: #39adb5;
  }

  .token.prolog {
    color: #aabfc9;
  }

  .token.property {
    color: #39adb5;
  }

  .token.pseudo-class {
    color: #f6a434;
  }

  .token.pseudo-element {
    color: #f6a434;
  }

  .token.punctuation {
    color: #39adb5;
  }

  .token.regex {
    color: #6182b8;
  }

  .token.selector {
    color: #e53935;
  }

  .token.string {
    color: #f6a434;
  }

  .token.symbol {
    color: #7c4dff;
  }

  .token.tag {
    color: #e53935;
  }

  .token.unit {
    color: #f76d47;
  }

  .token.url {
    color: #e53935;
  }

  .token.variable {
    color: #e53935;
  }

  .line-numbers .line-numbers-rows {
    border-color: #CECFDD;
  }

  .line-numbers-rows > span:before {
    color: #CECFDD;
  }
`

const StyledBody = props => {
  const { theme: { breakpoints }, language } = props

  return css`
    ${prismMaterialLight}
    ${base({ breakpoints })}
    ${getInitialLetterStyles({language, breakpoints})}
  `
}

export default StyledBody
