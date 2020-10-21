import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-top: 60px;
    text-align: end;
  }

  .link {
    &:visited {
      color: #7D7FFE;
    }
  }

  .soundtrack-image {
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
  }

  .link-title {
    position: relative;
    display: inline-block;
    margin-top: ${calcRem(5)};
    padding-right: ${calcRem(19)};
    font-family: 'Amita', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 31px;
    color: #7D7FFE;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: ${calcRem(2)};
      width: ${calcRem(9)};
      height: ${calcRem(9)};
      background-image: url(${require('../../../../public/icons/newsLink/arrow.svg').default});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: #0254d8;

        &::after {
          background-image: url(${require('../../../../public/icons/newsLink/arrow_hover.svg').default});
        }
      }
    }
  }


  ${desktop.all} {
    & {
      grid-column: 4 / span 6;
    }

    .soundtrack-image {
      height: 21px;
      background-image: url('/icons/newsLink/soundtrack/desktop.all.png');

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background-image: url('/icons/newsLink/soundtrack_hover/desktop.all.png');
        }
      }
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(40)};
      grid-column: 3 / span 8;
    }

    .soundtrack-image {
      height: ${calcRem(21)};
      background-image: url('/icons/newsLink/soundtrack/tablet.all.png');
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(43)};
      grid-column: 1 / span 6;
      width: 100%;
    }

    .soundtrack-image {
      height: ${calcRem(18)};
      background-image: url('/icons/newsLink/soundtrack/mobile.all.png');
    }
  }
`

export default  props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
