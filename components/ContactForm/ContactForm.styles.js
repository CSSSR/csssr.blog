import { css } from '@emotion/react'
import { calcRem } from '../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }, colors }) => css`
  & {
    position: relative;
    margin-top: ${calcRem(33)};

    &.post {
      margin-top: ${calcRem(16)};

      form {
        margin-bottom: ${calcRem(-9)};
      }

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

        &:focus + .label {
          font-size: ${calcRem(10)};
          line-height: ${calcRem(12)};
        }
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



      .buttonWrapper span.submit-text {
        font-size: ${calcRem(10)};
        line-height: ${calcRem(30)};
      }

      .buttonWrapper.success span,
      .buttonWrapper.fail span,
      .buttonWrapper_mobile.success span,
      .buttonWrapper_mobile.fail span {
        margin-left: ${calcRem(8)};

        & span {
          width: 100%;
        }
      }

      .buttonWrapper_mobile.success span,
      .buttonWrapper_mobile.fail span {
        margin-top: 0;
      }

      .buttonWrapper.success .submit,
      .buttonWrapper.fail .submit {
        width: auto;
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

        > button[status='pending'] {
          border-width: ${calcRem(1)};
        }

        > button[status='pending'] > span {
          height: ${calcRem(30)};
          max-height: 100%;
        }

        svg {
          top: ${calcRem(-3)};
          left: ${calcRem(-3)};
          width: ${calcRem(35)};
          height: ${calcRem(35)};
          margin-left: 0;

          &.checkmark {
            transform: rotateZ(14deg);
          }

          &.progress-circle {
            top: 0;
            left: 0;
            width: ${calcRem(30)};
            height: ${calcRem(30)};
            transform: unset;
          }

          & path {
            stroke-width: ${calcRem(3)};
            stroke-linecap: round;
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
        display: block;
        width: 100%;
      }
    }

    &.mainPage {
      svg.checkmark path,
      svg.cross path,
      svg.progress-circle path {
        stroke-width: 4;
        stroke-linecap: round;
      }
    }

    .buttonWrapper.submitting .submit > button,
    .buttonWrapper_mobile.submitting .submit > button {
      border-color: transparent;
    }

    .buttonWrapper:not(.submitting) .progress-circle, 
    .buttonWrapper_mobile:not(.submitting) .progress-circle {
      display: none;
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
  }

  .label {
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

    > button[status="submitting"] {
      border-color: transparent;
    }

    svg {
      width: ${calcRem(40)};
      height: ${calcRem(40)};
      margin-left: ${calcRem(-12)};
      transform: rotateZ(14deg) scale(1.2);
      
      & path {
        stroke: ${colors.secondary.darken100} !important;
      }
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

  .subscribe-policy-link {
    color: ${colors.primary.origin};
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
          display: block;
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

      form div:nth-of-type(2) {
        order: 3;
      }

      .buttonWrapper_mobile {
        display: flex;
        flex-direction: row;
        order: 2;
        align-items: center;
        margin-top: ${calcRem(24)};
      }

      .buttonWrapper_mobile.success {
        flex-direction: row;
        align-items: center;

        & > span {
          margin-top: 0;
          margin-left: ${calcRem(8)};
        }
      }

      .buttonWrapper_mobile:not(.pending) .submit {
        width: auto;
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
        padding-left: ${calcRem(12)};
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
        display: block;
        font-size: ${calcRem(10)};
        line-height: ${calcRem(14)};
      }
    }

    &.mainPage {
      .buttonWrapper_mobile .submit svg {
        margin-left: ${calcRem(-21)};
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
      order: 3;
      width: 100%;
      margin-top: ${calcRem(8)};
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
