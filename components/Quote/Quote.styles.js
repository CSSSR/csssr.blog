import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-top: ${calcRem(85)};
  }

  & .quote {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      display: block;
      height: 100%;
      background-image: url(../../static/icons/quote/quote-line.svg);
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  & .image-wrapper {
    width: ${calcRem(108)};
    height: ${calcRem(199)};
  }

  ${desktop.all} {
    & .quote {
      max-width: ${calcRem(430)};

      &::before {
        width: 31px;
        right: calc(100% + 40px);
      }
    }
  }

  ${tablet.all} {
    &.quote {
      margin-top: ${calcRem(60)};

      &::before {
        top: ${calcRem(-40)};
        right: calc(100% +  ${calcRem(30)});
        width: ${calcRem(21)};
      }
    }
  }

  ${mobile.all} {
    &.quote {
      margin-top: ${calcRem(55)};

      &::before {
        top: ${calcRem(-272)};
        right: calc(100% + ${calcRem(15)});
        width: ${calcRem(23)};
      }
    }

    .picture {
      margin-top: ${calcRem(55)};
    }
  }
`



export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
