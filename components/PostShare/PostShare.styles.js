import { css } from '@emotion/react'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile } }) => css`
  & {
    background-color: white;
    max-width: ${calcRem(89)};
    padding: ${calcRem(10)};

    &.withMargin {
      margin-top: ${calcRem(40)};
      transform: translateX(${calcRem(-10)});
    }
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: ${calcRem(16)};
  }

  .link-item {
    color: #18191B;

    &:nth-of-type(3),
    &:nth-of-type(4) {
      margin-top: ${calcRem(16)};
    }

    &.copy {
      position: relative;
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: #0254D8;
      }
    }
  }

  .share-title {
    font-size: ${calcRem(12)};
    line-height: ${calcRem(16)};
  }

  .copy-message {
    position: absolute;
    top: 0;
    right: ${calcRem(-107)};
    padding: ${calcRem(8)} ${calcRem(8)} ${calcRem(6)} ${calcRem(8)};
    background-color: #ffffff;
    font-size: ${calcRem(10)};
    line-height: ${calcRem(10)};
    font-weight: 400;
    letter-spacing: ${calcRem(1.25)};
    color: #0076FF;
    text-transform: uppercase;

    &._en {
      right: ${calcRem(-64)};
    }
  }

  .share-link {
    width: ${calcRem(24)};
    height: ${calcRem(24)};
    background-color: #F2F2F8;
    border: none;
    cursor: pointer;

    &.copy {
      color: inherit;
    }
  }

  .hidden-input {
    position: absolute;
    pointer-events: none;
    opacity: 0;
    clip: rect(0 0 0 0);
  }

  ${mobile.all} {
    & {
      order: 1;
      max-width: 100%;
      padding: 0;

      &._ru {
        margin-top: 0;
      }
    }

    .share-title {
      display: none;
    }

    .links {
      justify-content: flex-start;
      margin-top: 0;
    }

    .link-item:nth-of-type(3),
    .link-item:nth-of-type(4) {
      margin-top: 0;
    }

    .link-item:not(:first-of-type) {
      margin-left: ${calcRem(16)};
    }
   }
`

const StyledPostShare = (props) => {
  const { breakpoints, colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledPostShare