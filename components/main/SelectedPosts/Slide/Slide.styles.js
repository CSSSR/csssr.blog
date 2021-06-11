import { css } from '@emotion/react'

import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors }) => css`
  & {
    position: absolute;
    top: 0;
    left: 0;
    font-family: 'Roboto', 'Arial', sans-serif;
    color: ${colors.secondary.darken100};
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    background-color: #ffffff;
  }

  &.active {
    z-index: 1;
  }

  &.exit-active.left {
    z-index: 2;
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;
    transform: translateX(${calcRem(-100)});
    opacity: 0;
  }

  &.exit-active.right {
    z-index: 2;
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;
    transform: translateX(${calcRem(100)});
    opacity: 0;
  }

  &.outLeft {
    z-index: 2;
    animation: 0.4s outLeft alternate linear;
  }

  .slide-picture {
    grid-column: 1 / span 5;

    img {
      width: ${calcRem(348)};
      height: ${calcRem(268)};
    }
  }

  .slide-content {
    grid-column: 6 / span 6;
    display: flex;
    flex-direction: column;
  }

  .slide-link {
    color: ${colors.secondary.darken100};
  }

  .slide-tag {
    font-weight: 300;
    color: ${colors.secondary.darken100};
  }

  .slide-date {
    font-weight: 300;
    padding-left: ${calcRem(15)};
    color: #9b9b9b;
  }

  .slide-title {
    margin-top: ${calcRem(10)};
    font-weight: 900;
    font-size: ${calcRem(24)};
    line-height: ${calcRem(32)};
  }

  .slide-description {
    font-weight: 300;
    margin-top: ${calcRem(15)};
  }

  ${mobile.all} {
    & {
      font-size: ${calcRem(14)};
    }

    .slide-picture {
      grid-column: 1 / span 6;

      img {
        width: ${calcRem(328)};
        height: ${calcRem(150)};
      }
    }

    .slide-title {
      font-size: ${calcRem(22)};
    }

    .slide-content {
      grid-column: 1 / span 6;
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

const StyledSlide = (props) => {
  const {
    theme: { breakpoints, colors },
  } = props

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledSlide
