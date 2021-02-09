import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet, desktop } }) => css`
  & {
    position: absolute;
    left: 0;
    width: ${calcRem(156)};
    padding: ${calcRem(10)};
    background-color: white;
  }

  &._fixed {
    position: fixed;
    top: ${calcRem(100)};
    padding-top: 64px;
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

  ${desktop.l} {
    & {
      transform: translateX(calc((100vw - 656px) / 4 - 78px));
    }
  }

  ${desktop.m} {
    & {
      transform: translateX(calc((100vw - 656px) / 4 - 78px));
    }
  }

  ${desktop.s}{
    & {
      transform: translateX(calc((100vw - 608px) / 4 - 78px));
    }
  }

  ${desktop.all} {
    & {
      padding-top: 50px;
    }

    .title {
      line-height: 22px;
    }

    .subtitle {
      font-size: 12px;
      line-height: 16px;
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(50)};
      transform: translateX(calc((100vw - ${calcRem(624)}) / 4 - ${calcRem(78)}));
    }

    .title {
      font-size: ${calcRem(16)};
      line-height: ${calcRem(22)};
    }
  }

  ${mobile.all} {
    & {
      position: relative;
      top: 0;
      left: 0;
      grid-column: 1 / span 6;
      width: 100%;
      margin-top: ${calcRem(60)};
      padding: 0;
    }

    &._fixed {
      position: relative;
      top: 0;
    }

    .container {
      width: 100%;
      max-width: 100%;
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
      top: ${calcRem(12)};
      right: 0;
      width: ${calcRem(73)};
      height: ${calcRem(50)};
    }
  }
`

export default (props) => {
  const { breakpoints, colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}
