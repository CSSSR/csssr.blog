import { css } from '@emotion/react'

import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet, desktop } }) => css`
  & {
    position: sticky;
    top: 156px;
    left: 0;
    z-index: 999;
    grid-column: 1 / span 2;
    grid-row: 1 / span 5;
    width: ${calcRem(156)};
    height: max-content;
    transition: top ease 0.5s, bottom ease 0.5s;
  }

  .container {
    display: flex;
    flex-direction: column;
    max-width: ${calcRem(156)};
    padding: ${calcRem(10)};
  }

  .title {
    margin-top: ${calcRem(8)};
    color: #18191B;
  }

  .subtitle {
    margin-top: ${calcRem(12)};
    color: #18191B;
  }

  .picture {
    max-width: ${calcRem(136)};

    & img {
      width: 100%;
    }
  }

  ${desktop.all} {
    & {
      margin-top: 50px;
    }

    &.with_news_podcast {
      top: 166px;
    }

    .title {
      line-height: 22px;
    }

    .subtitle {
      font-size: 12px;
      line-height: 16px;
    }
  }

  ${desktop.l} {
    & {
      transform: translateX(78px);
    }

    &.without_subscribe-form {
      transform: translateX(84px);
    }
  }

  ${desktop.m} {
    & {
      top: 154px;
      transform: translateX(78px);
    }

    &.without_subscribe-form {
      transform: translateX(84px);
    }
  }

  ${desktop.s}{
    & {
      transform: translateX(63px);
    }

    &.without_subscribe-form {
      transform: translateX(69px);
    }
  }

  ${tablet.all} {
    & {
      top: ${calcRem(124)};
      left: 0;
      top: ${calcRem(112)};
      width: ${calcRem(156)};
      // http://s.csssr.ru/U31J879TR/2021-03-05-11-10-29-3f7ga_.jpg
      transform: translate(calc(((100vw - ${calcRem(624)}) / 2 - 100%) / -2 ), ${calcRem(29)});
      // using big span number, to prevent white spaces between grid rows
      grid-row: 1 / span 100;
    }

    &.without_subscribe-form {
      grid-column: 1;
    }

    &.without_subscribe-form.with_news_podcast {
      grid-row: 1 / span 100;
    }

    &.with_news_podcast {
      top: ${calcRem(134)};
      margin-top: ${calcRem(24)};
    }

    .title {
      font-size: ${calcRem(16)};
      line-height: ${calcRem(22)};
    }
  }

  ${mobile.all} {
    & {
      position: static !important;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      grid-column: 1 / span 6;
      width: 100%;
      margin-top: ${calcRem(24)};
      padding: 0;
    }

    &._fixed {
      position: static;
      top: 0;
      padding-top: 0;
      margin-top: ${calcRem(24)};
    }

    &.with_news_podcast {
      margin-top: ${calcRem(30)};
    }

    &.with_news_podcast.hidden_desktop {
      margin-top: ${calcRem(50)};
    }

    .container {
      position: relative;
      order: 2;
      width: 100%;
      max-width: 100%;
      margin-top: ${calcRem(60)};
    }

    .title {
      margin-top: 0;
      font-size: ${calcRem(18)};
    }

    .subtitle {
      margin-top: ${calcRem(8)};
    }

    .picture {
      position: absolute;
      top: ${calcRem(16)};
      right: 0;
      width: ${calcRem(73)};
      height: ${calcRem(50)};
    }
   }
`

const StyledPostNewsletter = (props) => {
  const { breakpoints, colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledPostNewsletter
