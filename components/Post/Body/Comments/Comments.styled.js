import { css, keyframes } from '@emotion/react'
import calcRem from '../../../../utils/style/calcRem'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

const defaultAvatarImages = require.context('../../../../public/components/comments/defaultAvatar')

const base = ({ breakpoints: { tablet, mobile }, colors }) => {
  const commentOptionsStyles = `
    .commento-options, 
    .commento-options-mobile {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      float: none;
      display: flex;
      width: auto !important;
      height: auto;
    
      .commento-option-button {
        position: static;
        display: none;
        right: auto !important;
      }
    
      .commento-option-edit,
      .commento-option-remove {
        margin: 0;
        display: block;
        width: ${calcRem(20)};
        height: ${calcRem(20)};
        background-color: #7e8fa4;
        transition: background-color 200ms ease-out;
      }
    
      .commento-option-edit {
        mask-image: url(${require('../../../../public/icons/edit.svg').default});
      }
    
      .commento-option-remove {
        margin-left: ${calcRem(16)};
        mask-image: url(${require('../../../../public/icons/delete.svg').default});
      }
    
      @media (hover: hover) and (pointer: fine) {
        .commento-option-edit:hover {
          background-color: ${colors.secondary.darken100};
        }
    
        .commento-option-remove:hover {
          background-color: #f45b53;
        }
      }
    }
  `

  return css`
    & {
      position: relative;
      display: block;
      background-color: #ffffff;
      margin-top: 97px;
      grid-column: 4 / span 6;
    }

    .title {
      position: absolute;
      top: -17px;
      left: 0;
      display: flex;
      font-family: 'Roboto', 'Arial', sans-serif;
      font-size: 40px;
      line-height: 56px;
      font-weight: 900;
      color: ${colors.secondary.darken100};
    }
    .commento-root.commento-root-min-height {
      min-height: auto;
    }
    .commento-root {
      .commento-logged-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        height: auto;
        margin: 0;

        ~ .commento-main-area {
          .commento-button-margin {
            .commento-button {
              display: block;
            }
          }
        }

        .commento-logged-in-as {
          top: ${calcRem(90)};

          .commento-avatar-img {
            width: ${calcRem(32)};
            height: ${calcRem(32)};
          }

          .commento-name {
            display: none;
          }
        }

        .commento-profile-button {
          float: none;
          margin: 0;
          font-family: 'Roboto', 'Arial', sans-serif;
          font-size: 14px;
          line-height: 24px;
          font-weight: 300;
          color: ${colors.primary.origin};
          text-decoration: underline;

          &:nth-of-type(3),
          &:nth-of-type(4) {
            display: none;
          }
        }
      }

      .commento-avatar {
        float: none;
        display: inline-flex;
        width: 32px;
        height: 32px;
        margin-right: 0;
        font-family: 'Roboto', 'Arial', sans-serif;
        font-size: 18px;
        line-height: 24px;
        font-weight: bold;
      }

      .commento-main-area {
        .commento-login {
          position: relative;
          padding-top: 8px;

          &::before {
            position: absolute;
            content: '';
            top: 92px;
            left: 0;
            width: 32px;
            height: 32px;
            background-repeat: no-repeat;
            background-size: contain;
          }

          .commento-login-text {
            height: auto;
            margin-right: 0;
            font-family: 'Roboto', 'Arial', sans-serif;
            font-size: 14px;
            line-height: 24px;
            font-weight: 300;
            color: ${colors.primary.origin};
            text-decoration: underline;
          }
        }

        .commento-button-margin {
          padding-top: 0;
          padding-bottom: 20px;
          margin-top: 37px;
          margin-left: 48px;

          .commento-textarea-container {
            & > textarea {
              height: 75px;
              min-height: auto;
              padding: 24px 16px;
              border: 1px solid #e0e4ec;
              border-radius: 0;
              font-family: 'Roboto', 'Arial', sans-serif;
              font-size: 14px;
              line-height: 24px;
              font-weight: 300;
              color: #18191b;
              overflow: hidden;
              resize: none;

              &:focus {
                border: 1px solid ${colors.primary.origin};
              }

              &::placeholder {
                font-family: 'Roboto', 'Arial', sans-serif;
                font-size: 14px;
                line-height: 24px;
                font-weight: 300;
                color: #7e8fa4;
                text-align: left;
              }
            }
          }

          .commento-button {
            float: none;
            display: none;
            width: 208px;
            height: 40px;
            margin: 0;
            margin-top: 16px;
            padding: 9px 8px 7px;
            border: 1px solid #18191b;
            background-color: #ffffff;
            box-shadow: none;
            font-family: 'Roboto', 'Arial', sans-serif;
            font-weight: 900;
            color: #18191b;
            letter-spacing: 1.6px;
          }

          .commento-markdown-button {
            display: none;
          }
        }

        .commento-sort-policy-buttons-container {
          display: none;
        }

        .commento-card {
          margin: 0;
          padding-top: 30px;
          padding-left: 0;
          border: none !important;

          .commento-header {
            position: relative;
            display: flex;
            align-items: center;
            padding-bottom: 0;

            ${commentOptionsStyles}

            .commento-name {
              display: inline;
              margin-left: ${calcRem(6)};
              font-family: 'Roboto', 'Arial', sans-serif;
              font-size: 12px;
              line-height: 24px;
              font-weight: 900;
              color: #18191b;
            }

            .commento-name.commento-moderator::after {
              content: none;
            }

            .commento-avatar-img {
              width: ${calcRem(32)};
              height: ${calcRem(32)};
            }

            .commento-subtitle {
              display: inline;
              margin-left: 0;

              .commento-score {
                display: none;
              }

              .commento-timeago {
                font-family: 'Roboto', 'Arial', sans-serif;
                line-height: 24px;
                font-weight: normal;
                color: #7e8fa4;
              }
            }
          }

          .commento-body {
            margin-top: 8px;

            .commento-button-margin {
              margin-left: 0;
              margin-top: 0;
              padding-bottom: 0;
            }

            p {
              margin: 0;
              font-family: 'Roboto', 'Arial', sans-serif;
              font-size: 14px;
              line-height: 24px;
              font-weight: 300;
              color: #18191b;
            }
          }
        }
      }

      .commento-footer {
        display: none;
      }
    }

    ${tablet.all} {
      & {
        grid-column: 3 / span 8;
        margin-top: ${calcRem(66)};
      }

      .title {
        top: ${calcRem(-6)};
        font-size: ${calcRem(32)};
        line-height: ${calcRem(40)};
      }

      .commento-root {
        .commento-logged-container {
          .commento-logged-in-as {
            top: ${calcRem(86)};
          }
        }

        .commento-main-area {
          .commento-login {
            &::before {
              top: ${calcRem(87)};
            }
          }

          .commento-button-margin {
            margin-top: ${calcRem(32)};
          }
        }
      }
    }

    ${mobile.all} {
      & {
        grid-column: 1 / span 6;
        margin-top: ${calcRem(100)};
      }

      .title {
        top: ${calcRem(-40)};
        font-size: ${calcRem(32)};
        line-height: ${calcRem(40)};
      }

      #commento-textarea-root {
        margin-left: ${calcRem(8)};
      }

      .commento-root {
        .commento-logged-container {
          justify-content: flex-start;

          .commento-logged-in-as {
            top: ${calcRem(84)};
            .commento-avatar-img {
              width: ${calcRem(24)};
              height: ${calcRem(24)};
            }
          }

          .commento-profile-button {
            &:nth-of-type(2) {
              position: relative;
              top: ${calcRem(9)};
              left: ${calcRem(-34)};
              font-size: ${calcRem(14)};
              line-height: ${calcRem(24)};
            }
          }
        }

        .commento-main-area {
          .commento-login {
            &::before {
              top: ${calcRem(85)};
            }

            .commento-login-text {
              text-align: left;
            }
          }

          .commento-button-margin {
            margin-top: ${calcRem(39)};
            margin-left: ${calcRem(32)};
            padding-bottom: ${calcRem(10)};

            .commento-button {
              width: 100%;
            }

            .commento-textarea-container textarea {
              height: ${calcRem(72)};
            }
          }

          .commento-card {
            & div[id*='commento-comment-contents'] {
              position: relative;
              display: flex;
              flex-direction: column;
            }

            .commento-body {
              order: 2;
            }

            ${commentOptionsStyles}

            .commento-options-clearfix {
              display: none;
            }

            .commento-header {
              .commento-avatar-img {
                margin-right: ${calcRem(8)};
                width: ${calcRem(24)};
                height: ${calcRem(24)};
              }

              .commento-name {
                margin-left: 0;
              }
            }
          }

          .commento-comments {
            .commento-card {
              & div[id*='commento-comment-contents'] {
                position: relative;
                display: flex;
                flex-direction: column;
              }

              ${commentOptionsStyles}

              .commento-body {
                order: 2;
              }

              .commento-options-clearfix {
                display: none;
              }
            }
          }
        }
      }
    }
  `
}

const modal = ({ breakpoints: { mobile }, colors }) => {
  const fadeOut = keyframes`
    to {
      opacity: 0;
    }
  `

  return css`
    #commento-login-box {
      position: fixed;
      top: 50%;
      padding-top: ${calcRem(64)};
      padding-left: ${calcRem(40)};
      padding-right: ${calcRem(40)};
      padding-bottom: ${calcRem(40)};
      max-width: ${calcRem(416)};
      border: ${calcRem(1)} solid #7e8fa4;
      background-color: white;
      transform: translateY(-50%);
    }

    #commento-login-box-container.commento-login-box-container {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.3);
      width: 100%;
      height: 100%;
      z-index: 3;
    }

    #commento-login-box-oauth-pretext,
    #commento-login-box-email-subtitle {
      margin: 0;
      font-family: Roboto;
      font-size: ${calcRem(24)};
      font-style: normal;
      font-weight: 900;
      line-height: ${calcRem(32)};
      letter-spacing: 0px;
      text-align: left;
      color: ${colors.secondary.darken100};
    }

    #commento-login-box-oauth-buttons-container ~ #commento-login-box-email-subtitle {
      margin-top: ${calcRem(48)};
    }

    #commento-login-box-oauth-buttons-container {
      margin-top: ${calcRem(20)};

      .commento-oauth-buttons {
        position: static;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      .commento-button {
        width: ${calcRem(160)};
      }

      .commento-button:nth-of-type(n + 3) {
        margin-top: ${calcRem(16)};
      }
    }

    #commento-login-box-oauth-buttons-container .commento-button,
    #commento-login-box-email-button,
    #commento-login-box-password-input + .commento-email-button {
      margin-left: 0;
      margin-right: 0;
      height: ${calcRem(40)};
      font-family: Roboto;
      font-size: ${calcRem(12)};
      font-style: normal;
      font-weight: 900;
      line-height: ${calcRem(24)};
      letter-spacing: ${calcRem(1.6)};
      text-align: center;
      border-radius: 0;
      transition: background-color 200ms ease-out;
    }

    #commento-login-box-hr2 {
      display: none;
    }

    .commento-login-box-close {
      height: ${calcRem(23)} !important;
      width: ${calcRem(23)} !important;
      opacity: 1 !important;

      ::before,
      ::after {
        top: ${calcRem(10)} !important;
        left: ${calcRem(-2)} !important;
        width: ${calcRem(30)} !important;
        height: ${calcRem(2)} !important;
        background-color: #7e8fa4 !important;
        transition: background-color 200ms ease-out !important;
      }
    }

    .commento-email-container {
      display: inline-flex !important;
      margin-top: ${calcRem(16)} !important;
      margin-bottom: 0 !important;

      &:last-of-type {
        margin-top: ${calcRem(11)} !important;
      }
    }

    .commento-email {
      display: flex !important;
      flex-wrap: wrap !important;
      box-shadow: none !important;
    }

    #commento-login-box-email-input,
    #commento-login-box-name-input,
    #commento-login-box-password-input {
      padding: ${calcRem(4)} 0;
      width: 100%;
      height: ${calcRem(32)};
      border-bottom: ${calcRem(1)} solid #7e8fa4;
      border-radius: 0;
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: ${calcRem(16)};
      color: ${colors.secondary.darken100};
      transition: border-color 200ms ease-out;

      ::placeholder {
        color: ${colors.secondary.darken100};
      }

      :focus {
        border-color: ${colors.primary.origin};
      }
    }

    #commento-login-box-name-input {
      margin-top: ${calcRem(11)};
    }

    #commento-login-box-website-input {
      display: none;
    }

    #commento-login-box-email-button,
    #commento-login-box-password-input + .commento-email-button {
      margin-top: ${calcRem(30)};
      width: 100%;
      border: ${calcRem(1)} solid ${colors.secondary.darken100};
      color: ${colors.secondary.darken100};
      transition: border-color 200ms ease-out, color 200ms ease-out;
    }

    #commento-login-box-forgot-link-container a,
    #commento-login-box-login-link-container a {
      font-family: Roboto;
      font-size: ${calcRem(14)};
      font-style: normal;
      font-weight: 300;
      line-height: ${calcRem(24)};
      letter-spacing: 0;
      text-align: center;
      text-decoration: underline;
      color: ${colors.primary.origin};
      transition: color 200ms ease-out;
    }

    #commento-login-box-forgot-link-container,
    #commento-login-box-login-link-container {
      margin-bottom: 0;
    }

    #commento-login-box-forgot-link-container {
      margin-top: ${calcRem(20)};
    }

    #commento-login-box-login-link-container {
      margin-top: ${calcRem(8)};
    }

    #commento-error {
      position: absolute;
      top: ${calcRem(38)};
      left: 50%;
      height: auto;
      font-family: Roboto;
      font-size: ${calcRem(14)};
      font-style: normal;
      font-weight: 300;
      line-height: ${calcRem(24)};
      letter-spacing: 0;
      text-align: center;
      transform: translateX(-50%);
      opacity: 1;
      animation: 200ms linear 2.5s ${fadeOut} forwards;
    }

    @media (hover: hover) and (pointer: fine) {
      .commento-login-box-close:hover::before,
      .commento-login-box-close:hover::after,
      #commento-login-box-oauth-buttons-container .commento-button:hover {
        background-color: ${colors.primary.darken15} !important;
      }

      #commento-login-box-forgot-link-container a:hover,
      #commento-login-box-login-link-container a:hover {
        color: ${colors.primary.darken15};
      }

      #commento-login-box-email-button:hover,
      #commento-login-box-password-input + .commento-email-button:hover {
        color: ${colors.primary.darken15};
        border-color: ${colors.primary.darken15};
      }
    }

    ${mobile.all} {
      #commento-login-box {
        padding-left: ${calcRem(16)};
        padding-right: ${calcRem(16)};
        width: ${calcRem(340)};
        max-width: ${calcRem(340)};
      }

      #commento-login-box-oauth-buttons-container .commento-button {
        width: ${calcRem(145)};
      }

      #commento-login-box-email-button,
      #commento-login-box-password-input + .commento-email-button {
        margin-top: ${calcRem(24)};
      }

      #commento-error {
        top: ${calcRem(40)};
        width: ${calcRem(340)};
      }
    }
  `
}

export const backgroundImagesStyles = css`
  & {
    ${backgroundCssSmart('.commento-login::before', defaultAvatarImages)}
  }
`

const StyledComments = (props) => {
  const {
    theme: { breakpoints, colors },
  } = props

  return css`
    ${base({ breakpoints, colors })}
    ${modal({ breakpoints, colors })}
    ${backgroundImagesStyles}
  `
}

export default StyledComments
