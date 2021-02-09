import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet, desktop }, colors }) => css`
  & {
    position: relative;
    grid-column: 1 / span 12;
    width: 100vw;
    margin-top: ${calcRem(75)};
    padding: ${calcRem(30)} 0;
    background-color: #F5F6FA;
    transform: translateX(calc((100vw - var(--width-container)) / -2));
  }

  .container {
    position: relative;
    grid-column: 2 / span 10;
  }

  .title {
    font-size: ${calcRem(32)};
    line-height: ${calcRem(40)};
    color: ${colors.secondary.darken100};
  }

  .subtitle {
    margin-top: ${calcRem(15)};
    line-height: ${calcRem(24)};
    color: ${colors.secondary.darken100};
  }

  .picture {
    position: absolute;
    bottom: ${calcRem(-55)};
    right: ${calcRem(0)};
    width: ${calcRem(208)};
    height: ${calcRem(139)};

    & img {
      width: 100%;
    }
  }

  ${desktop.l} {
    --width-container: 1328px;
  }

  ${desktop.m} {
    --width-container: 1328px;
  }

  ${desktop.s}{
    --width-container: 1232px;
  }

  ${tablet.all} {
    --width-container: ${calcRem(944)};

    & {
      margin-top: ${calcRem(60)};
    }

    .subtitle {
      font-size: ${calcRem(14)};
    }

    .picture {
      bottom: ${calcRem(-50)};
      width: ${calcRem(224)};
      height: ${calcRem(114)};
    }
  }

  ${mobile.all} {
    --width-container: ${calcRem(328)};

    & {
      margin-top: ${calcRem(50)};
    }

    .container {
      grid-column: 1 / span 6
    }

    .title {
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
    }

    .subtitle {
      line-height: ${calcRem(16)};
      padding-right: ${calcRem(88)};
    }

    .picture {
      bottom: auto;
      top: ${calcRem(40)};
      right: ${calcRem(-16)};
      width: ${calcRem(104)};
      height: ${calcRem(77)};
    }
  }
`

export const postSubscribeStyles = css`
  &.post {
    position: absolute;
    grid-column: 1 / span 3;
    width: 136px;
    background-color: red;
  }
`

export default (props) => {
  const { breakpoints, colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}
