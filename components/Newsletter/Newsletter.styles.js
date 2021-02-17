import { css } from '@emotion/react'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet, desktop }, colors }) => css`
  & {
    position: relative;
    grid-column: 1 / span 12;
    width: 100vw;
    margin-top: ${calcRem(75)};
    padding-bottom: ${calcRem(30)};
  }

  .section {
    width: 100%;
    justify-content: center;
    padding: ${calcRem(30)} 0;
    background-color: #F5F6FA;
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

  ${desktop.all} {
    & {
      margin-top: ${calcRem(140)};
      padding-bottom: 26px;
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

    & {
      margin-top: ${calcRem(50)};
      background-color: #F5F6FA;
    }

    .section {
      padding-left: ${calcRem(16)};
      padding-right: ${calcRem(16)};
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

const StyledNewsletter = props => {
  const { breakpoints, colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledNewsletter
