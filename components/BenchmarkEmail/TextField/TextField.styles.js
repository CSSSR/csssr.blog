import { css } from '@emotion/react'

import calcRem from '../../../utils/style/calcRem'

const base = ({ colors }) => css`
  & {
    position: relative;
  }

  input.formbox-field_LY6HH {
    position: relative;
    margin-top: ${calcRem(28)};
    background-color: #ffffff;
    border: none;
    border-bottom: ${calcRem(1)} solid ${colors.primary.origin};
    border-radius: 0;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    font-weight: 300;
    color: ${colors.secondary.darken100};
    box-sizing: border-box;
    padding: ${calcRem(4)} ${calcRem(12)};
    width: 100%;
    outline: none;
  }

  input.formbox-field_LY6HH.text-placeholder {
    border-bottom: ${calcRem(1)} solid #d4d4d4;
  }

  input.formbox-field_LY6HH.filled-without-focus {
    border-bottom: ${calcRem(1)} solid ${colors.secondary.darken100};

    & + .label {
      &._active {
        color: ${colors.secondary.gray};
      }
    }
  }

  input.formbox-field_LY6HH.error {
    border-bottom: ${calcRem(1)} solid #d0021b;

    & + .label {
      &._active {
        color: #d0021b;
      }
    }
  }

  .label {
    position: absolute;
    top: ${calcRem(32)};
    left: ${calcRem(14)};
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    font-weight: 300;
    color: ${colors.secondary.darken100};
    text-transform: lowercase;
    pointer-events: none;

    &._active {
      top: ${calcRem(62)};
      font-size: ${calcRem(12)};
      color: ${colors.secondary.darken100};
    }
  }
`

const TextField = props => {
  const { colors } = props.theme

  return css`
    ${base({colors})}
  `
}

export default TextField
