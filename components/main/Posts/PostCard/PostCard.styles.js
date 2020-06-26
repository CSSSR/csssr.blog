import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`
  & a {

    @media (hover: hover) and (pointer: fine) {
      &:hover .title {
        color: ${colors.primary.origin};
        transition: color 150ms ease-in-out;
      }
    }
  }

  li > a {
    display: block;
  }

  .picture {
    display: block;
    width: 100%;

    img {
      width: 100%;
    }

    &_size_m {
      min-height: ${calcRem(310)};
    }

    &_size_s {
      min-height: ${calcRem(215)};
    }
  }

  .title {
    font-family: 'Roboto', 'Arial', sans-serif;;
    font-style: normal;
    font-weight: 900;
    color: ${colors.secondary.darken100};

    &_size_m {
      font-size: 32px;
      line-height: 40px;
    }

    &_size_s {
      font-size: 24px;
      line-height: 32px;
    }
  }

  .tag,
  .date {
    margin-top: ${calcRem(15)};
    display: inline-block;
    font-family: Roboto;
    font-style: normal;
    font-size: ${calcRem(10)};
    line-height: ${calcRem(16)};
  }

  .tag {
    font-weight: 500;
    color: #5695ED;
  }

  .date {
    margin-left: ${calcRem(16)};
    display: inline-block;
    font-weight: normal;
    color: #7E8FA4;
  }

  ${desktop.all} {
    &:nth-child(n + 3) {
      margin-top: 75px;
    }

    .title {
      margin-top: 30px;
    }
  }

  ${tablet.all} {
    &:nth-child(n + 3) {
      margin-top: ${calcRem(60)};
    }

    .picture {
      &_size_m {
        min-height: ${calcRem(220)};
      }

      &_size_s {
        min-height: ${calcRem(150)};
      }
    }

    .title {
      margin-top: ${calcRem(20)};
    }
  }

  ${mobile.all} {
    &:not(:first-of-type) {
      margin-top: ${calcRem(50)};
    }

    .picture {
      min-height: ${calcRem(150)};
    }

    .title {
      margin-top: ${calcRem(20)};
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
    }

    .tag,
    .date {
      margin-top: ${calcRem(10)};
    }
  }
`

const dynamic = ({ breakpoints: { mobile }, size, side }) => {
  return css`
    grid-column-end: ${size === 'm' ? 'span 7' : 'span 3'};
    grid-column-start: ${side === 'r' ? size === 'm' ? 5 : 9 : 2};

    ${mobile.all} {
      grid-column: 1 / span 6;
    }
  `
}

export default props => {
  const { theme: { breakpoints, colors }, size, side } = props

  return css`
    ${base({ breakpoints, colors })}
    ${dynamic({ breakpoints, size, side})}
  `
}
