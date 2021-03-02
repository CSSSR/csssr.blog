import { css } from '@emotion/react'
import { calcRem } from '../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }, colors }) => css`
  & {
    position: relative;
    margin-top: ${calcRem(33)};

    &.post {
      margin-top: ${calcRem(16)};

      .wrapper {
        flex-direction: column;

        & div:first-of-type {
          height: auto;
        }
      }

      .input.field-input {
        width: 100%;
        padding: 0;
        font-size: ${calcRem(12)};
        line-height: ${calcRem(24)};
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .submit > button {
        height: ${calcRem(30)};
        margin-top: ${calcRem(20)};
        margin-left: 0;
      }

      .buttonWrapper {
        margin-top: ${calcRem(20)};
        top: 0;
      }

      .buttonWrapper span {
        font-size: ${calcRem(10)};
        line-height: ${calcRem(12)};
      }

      .buttonWrapper.success span,
      .buttonWrapper.fail span {
        margin-left: ${calcRem(8)};

        & span {
          width: 100%;
        }
      }

      .buttonWrapper.success .submit,
      .buttonWrapper.fail .submit {
        width: auto;
      }

      .buttonWrapper.fail .progress-circle {
        display: none;
      }

      .submit {
        height: auto;

        > button {
          width: 100%;
          height: ${calcRem(30)};
          margin-top: 0;
          background-color: transparent;
          border-width: ${calcRem(2)};
          transition: unset;
        }

        > button[status='fail'],
        > button[status='success'],
        > button[status='submitting'] {
          width: ${calcRem(30)};
          margin-left: 0;

          > span {
            display: none;
          }
        }

        > button[status='fail'] {
          background-color: unset;
        }

        svg {
          top: ${calcRem(-3)};
          left: ${calcRem(-3)};
          width: ${calcRem(35)};
          height: ${calcRem(35)};
          margin-left: 0;
          transform: rotateZ(14deg);

          &.cross {
            transform: unset;
          }

          & path {
            stroke-width: ${calcRem(3)};
          }
        }
      }

      .submit-text {
        font-size: ${calcRem(10)};
        transition: color 0.3s;
      }

      label.label {
        font-size: ${calcRem(12)};
        line-height: ${calcRem(16)};
        left: 0;
        color: ${colors.secondary.darken100};
      }

      .label._active {
        font-size: ${calcRem(10)};
        line-height: ${calcRem(12)};
      }

      .policy {
        display: none;
        width: 100%;
      }

      .policy.visible {
        display: block;
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

    &.success .submit,
    &.fail .submit {
      width: auto;
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
      margin-left: ${calcRem(16)};
      border-color: ${colors.secondary.darken100};

      > span {
        display: none;
      }
    }

    svg {
      width: ${calcRem(40)};
      height: ${calcRem(40)};
      margin-left: ${calcRem(-12)};
      transform: rotateZ(14deg) scale(1.2);
    }

    svg.cross {
      transform: scale(1.4);
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

  svg.checkmark path,
  svg.cross path {
    stroke-width: 4;
    stroke-linecap: round;
    stroke: ${colors.secondary.darken100} !important;
  }

  ${tablet.all} {
    & {
      &.post {
        margin-top: ${calcRem(16)};

        .submit {
          > button[status='fail'],
          > button[status='success'],
          > button[status='submitting'] {
            width: ${calcRem(30)};
          }
        }
        .policy {
          display: none;
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
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(20)};
    }

    &.post {
      position: static;
      margin-top: ${calcRem(20)};

      form {
        display: flex;
        flex-direction: column;
      }

      .buttonWrapper_mobile {
        display: flex;
        margin-top: ${calcRem(24)};
      }

      .buttonWrapper_mobile.success {
        flex-direction: row;
        align-items: center;

        .submit {
          width: auto;
        }

        & > span {
          margin-top: 0;
          margin-left: ${calcRem(8)};
        }
      }

      .submit {
        margin-top: 0;

        > button[status='pending'] {
          height: ${calcRem(40)};
        }
      }

      .submit > button {
        margin-top: 0;
      }

      .submit-text {
        font-size: ${calcRem(12)};
        line-height: ${calcRem(24)};
      }

      .input.field-input {
        padding-bottom: ${calcRem(3)};
        padding-left: ${calcRem(14)};
        font-size: ${calcRem(16)};
        line-height: ${calcRem(24)};
      }

      .label {
        left: ${calcRem(14)};
        font-size: ${calcRem(16)};
        line-height: ${calcRem(24)};

        &._active {
          font-size: ${calcRem(12)};
          line-height: ${calcRem(24)};
        }
      }

      .policy {
        order: 3;
        display: block;
        margin-top: ${calcRem(8)};
        font-size: ${calcRem(10)};
        line-height: ${calcRem(14)};
      }
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
        margin-left: ${calcRem(-37)};
      }
    }

    .policy {
      width: 100%;
      margin-top: ${calcRem(15)};
    }
  }

  @media (hover: hover) and (pointer: fine) {
    &.post {
      .buttonWrapper:hover:not(.success) {
        .submit-text {
          color: ${colors.primary.origin}
        }

        .submit > button[status='pending'] {
          border-color: ${colors.primary.origin};
        }
      }
    }
    
  }
`

const StyledContactForm = props => {
  const { breakpoints, colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledContactForm
