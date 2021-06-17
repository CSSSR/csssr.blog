import { css } from '@emotion/react'

import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors }) => css`
  & {
    position: relative;
  }

  .button-prev,
  .button-next {
    position: relative;
    border: none;
    background-color: transparent;
    width: ${calcRem(20)};
    height: ${calcRem(20)};
    cursor: pointer;
    display: inline-flex;
    align-items: flex-start;

    &::before {
      content: '';
      position: absolute;
      width: ${calcRem(48)};
      height: ${calcRem(48)};
      top: ${calcRem(-14)};
    }
  }

  .button-prev::before {
    right: 0;
  }

  .button-next::before {
    left: 0;
  }

  .button-prev .icon {
    transform: scale(-1, -1);
  }

  .button-next {
    margin-left: ${calcRem(16)};
  }

  .icon {
    width: ${calcRem(20)};
    height: ${calcRem(20)};
  }

  ${mobile.all} {
    & {
      display: flex;
      justify-content: space-between;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .button-prev:hover,
    .button-next:hover {
      .icon {
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

const StyledArrows = (props) => {
  const {
    theme: { breakpoints, colors },
  } = props

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledArrows
