import { css } from '@emotion/react'

import calcRem from '../../../utils/style/calcRem'

const base = ({ colors }) => css`
  & {
    position: relative;
  }

  & + & {
    margin-top: ${calcRem(40)};
  }

  .input {
    padding-left: ${calcRem(12)};
    padding-right: ${calcRem(12)};
    padding-bottom: ${calcRem(4)};
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: ${calcRem(1)} solid #d4d4d4;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    color: ${colors.secondary.darken100};
    background-color: transparent;
  }

  .input::placeholder {
    color: ${colors.secondary.gray};
  }

  .input:focus {
    border-bottom-color: ${colors.primary.origin};
  }

  .input._error {
    border-bottom-color: #d0021b;
  }

  .input._error + .label,
  .input._error:focus + .label {
    color: #d0021b;
  }

  .label {
    font-family: Roboto, sans-serif;
    pointer-events: none;
    font-weight: 300;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    position: absolute;
    top: 0;
    left: ${calcRem(12)};
    color: ${colors.secondary.gray};

    > span {
      opacity: 0.4
    }
  }

  .input:focus + .label,
  .label._active {
    transform: translateY(${calcRem(28)});
    color: ${colors.secondary.darken100};
    font-weight: 300;
    text-transform: lowercase;
  }
`

const StyledTextField = (props) => {
  const { colors } = props.theme

  return css`
    ${base({colors})}
  `
}

export default StyledTextField