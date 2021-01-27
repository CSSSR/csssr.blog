import { css } from '@emotion/react'
import { calcRem } from '../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }, colors }) => css`
  & {
    position: relative;
    margin-top: ${calcRem(33)};

    &.post {
      .input.field-input {
        width: ${calcRem(431)};
      }
    }
  }

  .wrapper {
    display: flex;

    > div {
      flex-shrink: 0;

      &:first-of-type {
        height: ${calcRem(44)};
      }
    }
  }

  .input.field-input {
    width: ${calcRem(544)};
    padding-left: ${calcRem(14)};
    padding-right: ${calcRem(14)};
  }

  .label {
    left: ${calcRem(14)};
    color: ${colors.secondary.darken100};
  }

  .buttonWrapper {
    position: relative;
    top: ${calcRem(-8)};
    display: flex;
    align-items: center;

    &_mobile {
      display: none;
    }
  }

  .submit {
    > button {
      width: ${calcRem(208)};
      height: ${calcRem(40)};
      margin-left: ${calcRem(16)};
      background-color: transparent;
    }

    > button[status='fail'],
    > button[status='success'],
    > button[status='submitting'] {
      width: ${calcRem(40)};
      margin-left: ${calcRem(100)};

      > span {
        display: none;
      }
    }

    svg {
      width: ${calcRem(40)};
      height: ${calcRem(40)};
      margin-left: ${calcRem(50)};
    }

    span {
      max-height: ${calcRem(24)};
      display: inline-block;
    }
  }

  .submit-text {
    font-family: Roboto;
    font-weight: 900;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(24)};
    color: ${colors.secondary.darken100};
    text-align: center;
    letter-spacing: 1.6px;
    text-transform: uppercase;
  }

  .policy {
    width: ${calcRem(504)};
    margin-top: ${calcRem(9)};
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: ${calcRem(10)};
    line-height: ${calcRem(16)};
    color: ${colors.secondary.gray};
  }

  .link {
    color: ${colors.primary.origin};
  }

  ${tablet.all} {
    & {
      &.post {
        margin-top: ${calcRem(28)};

        .input.field-input {
          width: ${calcRem(384)};
        }

        .submit {
          > button {
            width: ${calcRem(224)};
          }

          > button[status='fail'],
          > button[status='success'],
          > button[status='submitting'] {
            width: ${calcRem(40)};
          }
        }
      }
    }

    .input.field-input {
      width: ${calcRem(384)};
    }

    .submit {
      > button {
        width: ${calcRem(144)};
      }

      > button[status='fail'],
      > button[status='success'],
      > button[status='submitting'] {
        margin-left: ${calcRem(68)};
      }

      svg {
        margin-left: ${calcRem(34)};
      }
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(20)};
    }

    .wrapper {
      flex-direction: column;

      > div {
        flex-shrink: 0;

        &:first-of-type {
          height: auto;
        }
      }
    }

    .buttonWrapper {
      display: none;

      &_mobile {
        top: 0;
        display: block;
        flex-direction: column;
        text-align: center;
      }
    }

    .input.field-input {
      width: 100%;
    }

    .submit {
      margin-top: ${calcRem(20)};

      > button {
        width: 100%;
        margin-left: 0;
      }

      > button[status='fail'],
      > button[status='success'],
      > button[status='submitting'] {
        margin: 0 auto;
      }

      svg {
        margin: 0 auto;
      }
    }

    .policy {
      width: 100%;
      margin-top: ${calcRem(15)};
    }
  }
`

export default props => {
  const { breakpoints, colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}
