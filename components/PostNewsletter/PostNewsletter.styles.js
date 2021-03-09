import { css } from '@emotion/react'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet, desktop } }) => css`
  & {
    position: sticky;
    top: ${calcRem(154)}; //100px отступ + 64px высота хедера - 10px padding-top
    left: 0;
    z-index: 999;
    grid-column: 1 / span 2;
    grid-row: 1 / span 5;
    width: ${calcRem(156)};
    height: max-content;
    padding: ${calcRem(10)};
    background-color: white;
    transition: top ease 0.5s, bottom ease 0.5s;
  }

  &.version_en {
    padding: 0;
    background-color: transparent;
  }

  .container {
    display: flex;
    flex-direction: column;
    max-width: ${calcRem(136)};
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
    & img {
      width: 100%;
    }
  }

  ${desktop.all} {
    & {
      margin-top: 40px;
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

    &.version_en {
      transform: translateX(84px);
    }
  }

  ${desktop.m} {
    & {
      transform: translateX(78px);
    }

    &.version_en {
      transform: translateX(84px);
    }
  }

  ${desktop.s}{
    & {
      transform: translateX(63px);
    }

    &.version_en {
      transform: translateX(69px);
    }
    
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(20)};
      left: 0;
      transform: translateX(calc(((100vw - ${calcRem(624)}) / 2 - 100%) / -2 )); // http://s.csssr.ru/U31J879TR/2021-03-05-11-10-29-3f7ga_.jpg
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
