import { css } from '@emotion/react'
import { calcRem } from '../../../utils/style/calcRem'

const base = ({breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    display: flex;
    justify-content: center;
    overflow: hidden;
    overflow-x: auto;
    grid-column: 2 / span 10;
  }

  .inner {
    position: relative;
  }

  .items {
    display: flex;
    justify-content: center;
  }

 .item + .item {
    margin-left: ${calcRem(40)};
  }

  .link {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(24)};
    letter-spacing: ${calcRem(1.3)};
    text-transform: uppercase;
    color: #0076ff;
    white-space: nowrap;
    transition: color 150ms ease-in-out;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: #0254d8;
      }
    }
  }

  ${desktop.all} {
    & {
      padding-top: 22px;
      padding-bottom: 22px;
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(22)};
      padding-bottom: ${calcRem(22)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(28)};
      padding-bottom: ${calcRem(8)};
      justify-content: flex-start;
      grid-column: 1 / span 6;
    }

    .item {
      padding-bottom: ${calcRem(9)};
    }

    .item + .item {
      margin-left:${calcRem(40)};
    }

    .inner {
      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        width: 100%;
        height: ${calcRem(2)};
        background-color: rgba(86, 149, 237, 0.4);
      }
    }
  }
`

const StyledCategories = props => {
  const { breakpoints } = props.theme

  return css`
    ${base({ breakpoints })}
  `
}

export default StyledCategories