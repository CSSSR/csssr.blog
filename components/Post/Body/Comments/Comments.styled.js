import { css } from '@emotion/react'
import calcRem from '../../../../utils/style/calcRem'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

const defaultAvatarImages = require.context('../../../../public/components/comments/defaultAvatar')

const base = ({ breakpoints: { mobile, tablet, desktop }, colors }) => css`
  & {
    display: block;
    background-color: #ffffff;
    margin-top: ${calcRem(60)};
    grid-column: 4 / span 6;
  }

  .title {
    margin-bottom: ${calcRem(-30)};
    color: ${colors.secondary.darken100};
  }

  .commento-root {
    .commento-logged-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      height: auto;
      margin: 0;

      .commento-logged-in-as {
        .commento-avatar {
          position: relative;
          top: 92px;
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

        &::before {
          position: absolute;
          content: '';
          top: 84px;
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
        margin-left: 24px;

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

      & > .commento-button-margin {
        margin-left: 48px;
      }

      .commento-sort-policy-buttons-container {
        display: none;
      }

      .commento-comments {
        .commento-card {
          margin: 0;
          padding-top: 30px;
          padding-left: 24px;
          border: none !important;

          .commento-header {
            position: relative;
            padding-bottom: 0;

            .commento-options {
              position: absolute;
              float: none;
              height: 20px;

              .commento-option-button {
                display: none;
              }

              .commento-option-reply,
              .commento-option-cancel {
                top: 64px;
                right: auto !important;
                left: 0;
                display: block;
                margin: 0;
              }

              .commento-option-cancel {
                top: 70px;
              }
            }

            .commento-avatar {
              display: inline-flex;
            }

            .commento-name {
              display: inline;
              margin-left: 16px;
              font-family: 'Roboto', 'Arial', sans-serif;
              font-size: 12px;
              line-height: 24px;
              font-weight: 900;
              color: #18191b;
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
            padding-bottom: 28px;

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
    }

    .commento-footer {
      display: none;
    }
  }

  ${desktop.all} {
    & {
      margin-top: ${calcRem(80)};
    }
  }

  ${tablet.all} {
    & {
      grid-column: 3 / span 8;
    }

    .title {
      margin-bottom: ${calcRem(-10)};
    }

    .commento-root {
      .commento-logged-container {
        .commento-logged-in-as {
          .commento-avatar {
            top: 87px;
          }
        }
      }

      .commento-main-area {
        .commento-login {
          &::before {
            top: 79px;
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
    }

    .commento-root {
      .commento-main-area {
        .commento-button-margin {
          .commento-button {
            width: 100%;
          }
        }
      }
    }
  }
`

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
    ${backgroundImagesStyles}
  `
}

export default StyledComments
