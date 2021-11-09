import { css } from '@emotion/react'

import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet, desktop }, colors }) => css`
  & {
    position: relative;
    width: 100%;
    margin-top: ${calcRem(72)};
    padding-bottom: ${calcRem(30)};
    z-index: 9000;
    background-color: #F5F6FA;
  }

  .grid {
    padding: ${calcRem(30)} 0;
  }

  .container {
    position: relative;
    grid-column: 1 / span 12;
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
      margin-bottom: 26px;
      padding-bottom: 0;
    }

    .grid {
      padding-bottom: 16px;
    }

    .picture {
      margin-right: -84px;
      margin-bottom: 14px;
    }
  }


  ${tablet.all} {
    & {
      padding-bottom: 0;
      margin-bottom: ${calcRem(37)};
    }

    .container {
      grid-column: 2 / span 10 ;
    }

    .grid {
      padding-bottom: 0;
    }

    .subtitle {
      font-size: ${calcRem(14)};
    }

    .picture {
      bottom: ${calcRem(-37)};
      width: ${calcRem(224)};
      height: ${calcRem(114)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(70)};
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

export const dynamicFooterStyles = css`
  // Когда используется этот компонент, у футера не должно быть отступа

  footer.footer {
    margin-top: 0;
  }

  main.main {
    margin-bottom: 0;
  }
`

const StyledNewsletter = props => {
  const { breakpoints, colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledNewsletter
