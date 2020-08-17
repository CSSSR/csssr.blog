import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ media }) => css`
  & {
    z-index: 99999;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2.265rem;
    background-color: #171717;
    color: #ffffff;
    transition: transform 200ms ease-out;
  }

  &.hide {
    transform: translateY(100%);
  }

  .wrap {
    max-width: 43.25rem;
  }

  .close {
    padding: 0;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 1rem;
    height: 1rem;
    color: #ffffff;
    cursor: pointer;
  }

  .cookies-text {
    color: #ffffff;
    -webkit-text-size-adjust: 100%; /* Prevent font scaling in landscape while allowing user zoom */
  }

  .cookies-link {
    text-decoration: underline;
    cursor: pointer;
    color: #ffffff;
    margin-left: 0.25rem;
  }

  ${media.from('1024px')} {
    & {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    .close {
      top: 1.25rem;
      right: 2rem;
      width: 1.5rem;
      height: 1.5rem;
    }

    .wrap {
      max-width: 49rem;
    }
  }

  @media (min-device-width : 375px) 
  and (max-device-width : 812px) 
  and (-webkit-min-device-pixel-ratio : 2)
  and (-webkit-max-device-pixel-ratio : 3) {
    & {
      padding-top: ${calcRem(12)};
      padding-bottom: ${calcRem(12)};
      padding-left: ${calcRem(24)};
      padding-right: ${calcRem(27)};
    }

    .wrap {
      max-width: unset;
    }

    .close {
      top: ${calcRem(12)};
      right: ${calcRem(12)};
      width: ${calcRem(12)};
      height: ${calcRem(12)};
    }

    .cookies-text {
      font-size: 14px;
      line-height: 24px;
    }
  }
`

export default props => {
  const media = props.theme.media

  return css`
    ${base({media})}
  `
}
