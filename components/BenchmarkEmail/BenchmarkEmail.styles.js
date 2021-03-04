import { css, keyframes } from '@emotion/react'
import { calcRem } from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors }) => css`
  & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .container {
    width: ${calcRem(930)};
  }

  .heading {
    color: ${colors.secondary.darken100};
  }

  .break {
    display: none;
  }

  .sub-heading {
    margin-top: ${calcRem(16)};
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    font-weight: 300;
    color: ${colors.secondary.darken100};
  }

  .form {
    position: relative;
    width: ${calcRem(480)};
    margin-top: ${calcRem(24)};
  }

  .formbox-editor_LY6HH {
    top: 0;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    border-radius: 0;
    box-sizing: border-box;
    background: #ffffff;
    text-align: left;
  }

  .fieldset {
    position: relative;
    margin: 0;
    padding: 0;
    border: none;
  }

  .formbox-button_LY6HH {
    margin-top: ${calcRem(50)};
    padding-top: ${calcRem(9)};
    padding-bottom: ${calcRem(7)};
    border: ${calcRem(1)} solid ${colors.secondary.darken100};
    box-sizing: border-box;
    background-color: none;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(24)};
    font-weight: 900;
    color: ${colors.secondary.darken100};
    letter-spacing: ${calcRem(1.6)};
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
  }

  .picture {
    position: absolute;
    top: ${calcRem(14)};
    right: ${calcRem(-450)};
    width: ${calcRem(366)};
    height: ${calcRem(244)};

    &::before,
    &::after {
      position: absolute;
      content: '';
      top: ${calcRem(22)};
      width: ${calcRem(5)};
      height: ${calcRem(5)};
      border-radius: 50%;
      background-color: #15292a;
      animation: ${reading} 2.4s ease infinite;
    }

    &::before {
      left: ${calcRem(104)};
    }

    &::after {
      left: ${calcRem(122)};
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .policy {
    margin-top: ${calcRem(20)};
    font-family: Roboto, sans-serif;
    font-size: ${calcRem(10)};
    line-height: ${calcRem(16)};
    font-weight: 300;
    color: ${colors.secondary.gray};
  }

  .link {
    color: ${colors.primary.origin};
  }

  .spacer-block_LY6HH {
    min-height: 20px;
    padding: 10px 0;
    position: relative;
  }

  .spacer-block-line_LY6HH {
    position: absolute;
    top: 50%;
    left: 40px;
    right: 40px;
    display: none;
    border-top-style: solid;
  }

  .formbox-title_LY6HH,
  .formbox-text-field_LY6HH {
    margin-bottom: 0;
    font-family: Helvetica, Arial, sans-serif;
    color: #000000;
    font-size: 14px;
  }

  .formbox-title_LY6HH a,
  .formbox-text-field_LY6HH a {
    text-decoration: none;
  }

  .formbox-title_LY6HH p,
  .formbox-text-field_LY6HH p {
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
    word-break: break-word;
  }

  label.formbox-field-label_LY6HH {
    font-family: Helvetica, Arial, sans-serif;
    display: block;
    margin: 10px 0 0;
    padding: 0;
    font-size: 14px;
    text-align: left;
    line-height: 100%;
    color: #000000;
  }

  label.formbox-label-wrap_LY6HH {
    font-family: Helvetica, Arial, sans-serif;
    display: block;
    margin: 10px 0 0;
    padding: 0;
    font-size: 14px;
    line-height: 100%;
    padding-left: 15px;
    text-indent: -15px;
    font-style: italic;
    color: #000000;
  }

  label.formbox-label-wrap_LY6HH:last-of-type {
    margin-bottom: 10px;
  }

  label.formbox-label-wrap_LY6HH input[type=checkbox],
  label.formbox-label-wrap_LY6HH input[type=radio] {
    width: 13px;
    height: 13px;
    padding: 0;
    margin: 0;
    margin-right: 5px;
    vertical-align: bottom;
    position: relative;
    top: -1px;
  }

  select.formbox-field_LY6HH {
    background-color: #000000;
    border: 2px solid #f1f2f2;
    border-radius: 0px;
    box-sizing: border-box;
    background-color: #ffffff;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 14px;
    width: 100%;
    margin: 10px 0;
    height: auto;
    padding: 2px 0px;
  }

  #popupFormLoader_LY6HH {
    display: none;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    background-image: url(https://benchmarkemail.com/images/popup-builder/loadingicon.svg);
    background-position: center center;
    background-repeat: no-repeat;
    background-color: rgb(255, 255, 255);
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 100%;
    -webkit-animation-name: spin;
    -webkit-animation-duration: 800ms;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: spin;
    -moz-animation-duration: 800ms;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: spin;
    -ms-animation-duration: 800ms;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;
    animation-name: spin;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  ${mobile.all} {
    & {
      justify-content: flex-start;
      padding: ${calcRem(40)} 0;
      height: 100%;
    }

    .container {
      width: ${calcRem(328)};
    }

    .break {
      display: block;
    }

    .sub-heading {
      margin-top: ${calcRem(50)};
    }

    .form {
      width: 100%;
      margin-top: ${calcRem(8)};
    }

    .picture {
      top: ${calcRem(-192)};
      right: 0;
      width: ${calcRem(168)};
      height: ${calcRem(112)};

      &::before,
      &::after {
        content: none;
      }
    }

    .formbox-button_LY6HH {
      margin-top: ${calcRem(40)};
    }
  }
`

const reading = keyframes`
  0% {
    transform: translateX(0);
  }

  90% {
    transform: translateX(-4px);
  }

  100% {
    transform: translateX(0);
  }
`

const BenchmarkEmail = props => {
  const { breakpoints, colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default BenchmarkEmail
