import { css } from '@emotion/core'
import { calcRem } from '../../../utils/style/calcRem'

const base = ({breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    display: flex;
    justify-content: center;
    width: 100vw;
    overflow: hidden;
    overflow-x: auto;
  }

  .inner {
    position: relative;
    margin-left: ${calcRem(40)};
    margin-right: ${calcRem(40)};
  }

  .items {
    display: flex;
    justify-content: center;
  }

 .item + .item {
    margin-left: ${calcRem(40)};
  }

  .link {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(24)};
    letter-spacing: ${calcRem(1.3)};
    text-transform: uppercase;
    color: #0076ff;
    white-space: nowrap;
  }

  ${desktop.all} {
    & {
      padding-top: 22px;
      padding-bottom: 22px;
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(22)};
      padding-bottom: ${calcRem(22)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(28)};
      padding-bottom: ${calcRem(14)};
      justify-content: flex-start;
    }

    .item {
      padding-bottom: ${calcRem(9)};
    }

    .item + .item {
      margin-left:${calcRem(40)};
    }

    .inner {
      margin-left: ${calcRem(16)};
      padding-right: ${calcRem(16)};

      &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        width: 100%;
        height: ${calcRem(2)};
        background-color: rgba(86, 149, 237, 0.4);
      }
    }
  }
`

export default props => {
  const { breakpoints } = props.theme

  return css`
    ${base({ breakpoints })}
  `
}
