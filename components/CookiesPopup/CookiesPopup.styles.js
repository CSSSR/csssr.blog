import { css } from '@emotion/react'
import calcRem from '../../utils/style/calcRem'

const base = ({ media }) => css`
  & {
    z-index: 99999;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-top: ${calcRem(8)};
    padding-bottom: ${calcRem(8)};
    padding-left: 2rem;
    padding-right: 2.265rem;
    background-color: #171717;
    color: #ffffff;
    transition: transform 200ms ease-out, opacity 200ms ease-out;
  }

  &.hide {
    transform: translateY(100%);
    opacity: 0;
  }

  .wrap {
    position: relative;
    display: flex;
  }

  .close {
    padding: 0;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 1rem;
    height: 1rem;
    color: #ffffff;
    cursor: pointer;
  }

  .cookies-text {
    position: relative;
    color: #ffffff;
    -webkit-text-size-adjust: 100%; /* Prevent font scaling in landscape while allowing user zoom */
  }

  .cookies-text::after {
    content: '';
    position: absolute;
    right: -172px;
    bottom: ${calcRem(-8)};
    width: ${calcRem(62)};
    height: ${calcRem(53)};
    background-image: url(${require('../../public/icons/cookie_ready.svg').default});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .cookies-link {
    text-decoration: underline;
    cursor: pointer;
    color: #ffffff;
    margin-left: 0.25rem;
  }

  @media (max-width: 1070px) and (min-width: 1025px) {
    p.cookies-text {
      max-width: ${calcRem(692)};
    }
  }

  ${media.from('1025px')} {
    & {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    .close {
      top: ${calcRem(21)};
      right: ${calcRem(16)};
      width: 1.5rem;
      height: 1.5rem;
    }

    .cookies-text {
      max-width: ${calcRem(780)};
    }

    .cookies-text::after {
      bottom: -0.5rem;
    }
  }

  ${media.to('1024px')} {
    .cookies-text {
      max-width: ${calcRem(692)};
    }

    .cookies-text::after {
      right: ${calcRem(-133)};
    }

    .close {
      top: ${calcRem(19)};
      right: ${calcRem(15)};
    }
  }

  ${media.from('768px')} {
    .close {
      width: ${calcRem(24)};
      height: ${calcRem(24)};
    }
  }

  ${media.to('767px')} {
    & {
      padding-top: ${calcRem(16)};
      padding-bottom: ${calcRem(16)};
    }

    .cookies-text::after {
      display: none;
    }

    .close {
      width: ${calcRem(16)};
      height: ${calcRem(16)};
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

const StyledCookiesPopup = props => {
  const media = props.theme.media

  return css`
    ${base({media})}
  `
}

export default StyledCookiesPopup
