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

  .title {
    font-family: 'Roboto', 'Arial', sans-serif;;
    font-style: normal;
    font-weight: 900;
    color: ${colors.secondary.darken100};
    margin-bottom: ${calcRem(15)};

    &_size_l {
      font-size: 32px;
      line-height: 40px;
    }

    &_size_s {
      font-size: 24px;
      line-height: 32px;
    }
  }

  picture {
    display: block;
  }

  img {
    width: 100%;
  }

  .tag,
  .date,
  .author {
    display: inline-block;
    font-family: Roboto;
    font-style: normal;
    text-transform: uppercase;
    font-size: ${calcRem(10)};
    line-height: ${calcRem(16)};
  }

  .tag {
    font-weight: 500;
    color: #5695ED;
    transition: color 150ms ease-in-out;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: #0254d8;
      }
    }
  }

  .date {
    margin-right: ${calcRem(16)};
    display: inline-block;
    font-weight: normal;
    color: #7E8FA4;
  }

  .author {
    display: inline-block;
    font-weight: normal;
    color: #7E8FA4;

    &::after {
      content: "•";
      margin-left: ${calcRem(8)};
      margin-right: ${calcRem(8)};
    }
  }

  ${desktop.all} {
    &:nth-of-type(n + 3) {
      margin-top: 75px;
    }

    .title {
      margin-top: 30px;
    }
  }

  ${tablet.all} {
    &:nth-of-type(n + 3) {
      margin-top: ${calcRem(60)};
    }

    .title {
      margin-top: ${calcRem(20)};
    }
  }

  ${mobile.all} {
    &:not(:first-of-type) {
      margin-top: ${calcRem(50)};
    }

    .title {
      margin-top: ${calcRem(20)};
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
      margin-bottom: ${calcRem(10)};
    }
  }
`

const dynamic = ({ breakpoints: { mobile }, size, side }) => {
  return css`
    grid-column-end: ${size === 'l' ? 'span 7' : 'span 3'};
    grid-column-start: ${side === 'r' ? size === 'l' ? 5 : 9 : 2};

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
