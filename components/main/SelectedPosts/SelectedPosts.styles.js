import { css } from '@emotion/react'

import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors }) => css`
  & {
    margin-top: ${calcRem(50)};
    overflow: hidden;
  }

  .wrap {
    position: relative;
  }

  .slider {
    grid-column: 1 / span 12;
    grid-row: 1;
    height: ${calcRem(268)};
    z-index: 1;
  }

  .arrows {
    margin-top: ${calcRem(45)};
    grid-column: 12 / span 1;
    grid-row: 1;
    z-index: 2;
  }

  .dots {
    position: absolute;
    bottom: ${calcRem(15)};
    grid-column: 6 / span 6;
    grid-row: 1;
    z-index: 2;
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(24)};
    }

    .slider {
      grid-column: 1 / span 6;
      grid-row: 1;
      height: ${calcRem(416)};
    }

    .arrows {
      margin-top: ${calcRem(20)};
      grid-column: 1 / span 6;
      grid-row: 2;
    }

    .dots {
      position: relative;
      margin-top: ${calcRem(20)};
      bottom: 0;
      grid-column: 2 / span 4;
      grid-row: 2;
      z-index: 3;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .slide-link:hover {
      .slide-title {
        color: ${colors.primary.origin};
        transition: color 150ms ease-in-out;
      }
    }

    .slide-tag:hover {
      color: #0254d8;
      transition: color 150ms ease-in-out;
    }
  }
`

const StyledPostCard = (props) => {
  const {
    theme: { breakpoints, colors },
  } = props

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledPostCard
