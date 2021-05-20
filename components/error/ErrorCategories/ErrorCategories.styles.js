import { css } from '@emotion/react'

import { calcRem } from '../../../utils/style/calcRem'

const base = ({breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    width: 100%;
    display: flex;
    overflow: hidden;
    overflow-x: auto;
  }

  .inner {
    position: relative;
  }

  .items {
    display: flex;
    justify-content: center;
  }

 .item {
    margin-right: ${calcRem(40)};
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
      padding-top: 3px;
      padding-bottom: 8px;
    }

    .items {
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    .link {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 1px;
    }

    .item {
      margin-right: 24px;
      margin-bottom: 16px;
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(2)};
      padding-bottom: ${calcRem(22)};
    }

    .link {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
      letter-spacing: ${calcRem(1)};
    }

    .items {
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    .item {
      margin-right: ${calcRem(20)};
      margin-bottom: ${calcRem(16)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(13)};
      padding-bottom: ${calcRem(8)};
      justify-content: flex-start;
      grid-column: 1 / span 6;
    }

    .item {
      padding-bottom: ${calcRem(9)};
      margin-right: ${calcRem(40)};
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
