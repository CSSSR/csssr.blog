import { css } from '@emotion/core'

const global = css`
  /*Тут можно стилизовать компонент
    body {
      border: 2px dashed blue;
    }

    div[id^="signupFormContainer"] {
      border: 2px dashed red;
    }

    div[id^="btnSubmit"] {
      border: 2px dashed red;
    }

    div[class^="formbox-button"] {
      border: 2px dashed red !important;
    }

    fieldset[class^="formbox-field"] {
      &:nth-of-type(2) {
        & input {
          padding: 30px;
        }
      }
    }
  */
`

export default () => css`
  ${global}
`
