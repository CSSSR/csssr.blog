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
    z-index: 1;
  }

  &.exit-active.left,
  &.exit-active.right {
    z-index: 2;
    transition: transform 0.2s ease-out, opacity 0.2s ease-out;
    opacity: 0;
  }

  &.exit-active.left {
    transform: translateX(${calcRem(-100)});
  }

  &.exit-active.right {
    transform: translateX(${calcRem(100)});
  }

  &.enter.left,
  &.enter.right {
    z-index: 2;
    opacity: 0;
  }

  &.enter.left {
    transform: translateX(${calcRem(100)});
  }

  &.enter.right {
    transform: translateX(${calcRem(-100)});
  }

  &.enter-active.left,
  &.enter-active.right {
    transition: transform 0.2s ease-out, opacity 0.2s ease-out;
    transform: translateX(0);
    opacity: 1;
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

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }

  .slide-tag {
    font-weight: 300;
    color: ${colors.secondary.darken100};
    position: relative;
    z-index: 2;
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
    &:hover {
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
