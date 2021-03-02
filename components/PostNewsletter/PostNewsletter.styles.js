import { css } from '@emotion/react'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet, desktop } }) => css`
  & {
    position: fixed;
    top: ${calcRem(154)}; //100px отступ + 64px высота хедера - 10px padding-top
    left: 0;
    width: ${calcRem(156)};
    padding: ${calcRem(10)};
    background-color: white;
  }

  &.onTop {
    position: absolute;
    top: auto;
    margin-top: ${calcRem(50)};
  }

  &.onBottom {
    position: absolute;
    top: auto;
    bottom: ${calcRem(422)};
  }

  &.enVersion {
    max-width: ${calcRem(89)};
    padding: 0;
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
      transform: translateX(calc(((50vw - 78px) - 516px))); // На дестопах отступ от текста 112px
    }

    &.onBottom {
      bottom: 470px;
    }
  }

  ${desktop.m} {
    & {
      transform: translateX(calc(((50vw - 78px) - 516px))); // На дестопах отступ от текста 112px
    }
  }

  ${desktop.s}{
    & {
      transform: translateX(calc(((50vw - 78px) - 484px))); // На дестопах отступ от текста 112px
    }
  }

  ${tablet.all} {
    & {
      transform: translateX(calc((100vw - ${calcRem(624)}) / 4 - ${calcRem(78)})); // От ширины экрана отнимается ширина контента, делится на 4 (отступ в левой части от конента) и отнимаем половину ширины блока подписки
    }

    &.onBottom {
      bottom: ${calcRem(466)};
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
