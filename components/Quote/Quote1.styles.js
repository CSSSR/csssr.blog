import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    background-image:
      url(${require('../../../static/icons/project/quote/circle.svg').default}),
      url(${require('../../../static/icons/project/quote/zigzag.svg').default}),
      url(${require('../../../static/icons/project/quote/line.svg').default});
    background-repeat: no-repeat, no-repeat, no-repeat;
  }

  .quote {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      display: block;
      background-image: url(${require('../../../static/icons/project/quote/quote-line.svg').default});
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  .author-name,
  .author-signature {
    display: block;
  }

  ${desktop.all} {
    .picture {
      grid-column: 2 / span 3;
    }

    .quote {
      margin-top: 121px;

      &::before {
        top: -36px;
        width: 31px;
        height: 579px;
      }
    }

    .author {
      margin-top: 84px;
    }

    .author-signature {
      margin-top: 4px;
    }
  }

  ${desktop.l} {
    & {
      margin-top: 183px;
      background-position: 219px 183px, 1046px 0, 535px 757px;
    }

    .picture {
      margin-top: 269px;
    }

    .quote {
      grid-column: 7 / span 5;

      &::before {
        right: calc(100% + 96px);
      }
    }
  }

  ${desktop.m} {
    & {
      margin-top: 143px;
      background-position: 180px 277px, 1006px 0px, 398px 763px;
    }

    .picture {
      margin-top: 389px;
    }

    .quote {
      grid-column: 6 / span 6;

      &::before {
        right: calc(100% + 64px);
      }
    }
  }

  ${desktop.s} {
    & {
      margin-top: 144px;
      background-position: 172px 277px, 999px 0px, 391px 763px;
    }

    .picture {
      margin-top: 429px;
    }

    .quote {
      grid-column: 6 / span 6;

      &::before {
        right: calc(100% + 53px);
      }
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(127)};
      background-position: ${calcRem(136)} ${calcRem(155)}, ${calcRem(759)} 0, ${calcRem(271)} ${calcRem(478)};
      background-size: auto, ${calcRem(90)} ${calcRem(19)}, ${calcRem(48)} ${calcRem(48)};
    }

    .picture {
      margin-top: ${calcRem(239)};
      grid-column: 2 / span 3;
    }

    .quote {
      margin-top: ${calcRem(88)};
      grid-column: 7 / span 5;

      &::before {
        top: ${calcRem(-40)};
        right: calc(100% +  ${calcRem(64)});
        width: ${calcRem(21)};
        height: ${calcRem(392)};
      }
    }

    .author {
      margin-top: ${calcRem(53)};
    }

    .author-signature {
      margin-top: ${calcRem(9)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(97)};
      background-position: ${calcRem(16)} ${calcRem(3)}, ${calcRem(224)} 0, ${calcRem(252)} ${calcRem(362)};
      background-size: auto, ${calcRem(90)} ${calcRem(19)}, ${calcRem(48)} ${calcRem(48)};
    }

    .picture {
      margin-top: ${calcRem(55)};
      grid-column: 2 / span 4;
    }

    .quote {
      margin-top: ${calcRem(24)};
      grid-column: 2 / span 5;

      &::before {
        top: ${calcRem(-272)};
        right: calc(100% + ${calcRem(19)});
        width: ${calcRem(23)};
        height: ${calcRem(552)};
        background-image: url(${require('../../../static/icons/project/quote/mobile.all/quote-line.svg').default});
      }
    }

    .author {
      margin-top: ${calcRem(53)};
    }

    .author-signature {
      margin-top: ${calcRem(9)};
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.all} {
    .picture {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }
  }

  ${desktop.l} {
    .quote {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }

  ${desktop.m} {
    .quote {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }

  ${desktop.s} {
    .quote {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }

  ${tablet.all} {
    .picture {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    .quote {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }

  ${mobile.all} {
    .picture {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .quote {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
