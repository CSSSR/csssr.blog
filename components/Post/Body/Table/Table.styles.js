import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet, desktop } }) => css`
  table {
    border-collapse: collapse;
  }

  &.color_green tbody th:only-child {
    color: #39724E;
    background-color: #87DCB7;
  }

  &.color_purple tbody th:only-child {
    background-color: #D3D3FF;
  }

  &.color_purple,
  &.color_green {
    thead th {
      color: #9B9B9B;
    }
  }

  &.with_borders {
    th, td {
      border-right: ${calcRem(1)} solid #e2e7ef;
      border-left: ${calcRem(1)} solid #e2e7ef;
    }

    tbody td {
      text-align: center;
    }

    th:first-child,
    td:first-child {
      border-left: none;
    }

    th:last-child,
    td:last-child {
      border-right: none;
    }
  }

  thead th {
    color: #18191B;
    font-weight: 500;
    vertical-align: top;
  }

  tbody tr {
    border-top: ${calcRem(1)} solid #e2e7ef;
    border-bottom: ${calcRem(1)} solid #e2e7ef;
  }

  tbody td {
    text-align: left;
  }

  tbody th:not(:only-child) {
    width: 35%;
  }

  thead th,
  tbody th:not(:only-child) {
    text-align: left;
  }

  thead th,
  tbody th,
  tbody td {
    font-family: Roboto;
    font-style: normal;
  }

  tbody th,
  tbody td {
    font-weight: normal;
    color: #18191B;
  }

  thead th,
  tbody th,
  tbody td {
    height: ${calcRem(48)};
  }

  ${desktop.all} {
    & {
      margin-top: 50px;
      grid-column: 4 / span 6;
    }

    thead th {
      padding-right: 20px;
      padding-left: 20px;
      padding-bottom: 16px;
    }

    thead th,
    tbody th,
    tbody td {
      font-size: 14px;
      line-height: 20px;
    }

    tbody th[colspan] {
      padding: 0;
    }

    tbody th {
      padding: 16px 16px 16px 10px;
    }

    tbody td {
      padding: 16px;
    }

    & + p.paragraph {
      margin-top: 50px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(30)};
      grid-column: 3 / span 8;
    }

    thead th {
      padding-right: ${calcRem(20)};
      padding-left: ${calcRem(20)};
      padding-bottom: ${calcRem(16)};
    }

    thead th,
    tbody th,
    tbody td {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(20)};
    }

    tbody th,
    tbody td {
      padding: ${calcRem(16)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(30)};
      grid-column: 1 / span 6;
      border: ${calcRem(1)} solid #e2e7ef;
      border-bottom: none;
      overflow-x: auto;
    }

    thead th {
      padding-top: ${calcRem(16)};
      padding-right: ${calcRem(32)};
      padding-left: ${calcRem(16)};
      padding-bottom: ${calcRem(16)};
      vertical-align: middle;
    }

    tbody th {
      padding-top: ${calcRem(16)};
      padding-right: ${calcRem(10)};
      padding-left: ${calcRem(10)};
      padding-bottom: ${calcRem(16)};
    }

    tbody td {
      padding-top: ${calcRem(16)};
      padding-right: ${calcRem(32)};
      padding-left: ${calcRem(32)};
      padding-bottom: ${calcRem(16)};
    }

    tbody th:not(:only-child) {
      width: 70%;
    }

    thead th,
    tbody th,
    tbody td {
      font-size: ${calcRem(12)};
      line-height: ${calcRem(20)};
      text-align: left;
    }

    tbody th[colspan] {
      position: sticky;
    }

    th:first-child {
      position: sticky;
      background-color: white;
      left: 0;
      box-shadow: ${calcRem(5)} 0 ${calcRem(10)} rgba(0, 0, 0, 0.05), ${calcRem(1)} ${calcRem(1)} 0 #e2e7ef, ${calcRem(-1)} 0 0 #e2e7ef;
      z-index: 0;
    }

    th:only-child {
      left: 0;
      display: block;
      width: ${calcRem(220)};

      &::after {
        content: '';
        position: absolute;
        top: ${calcRem(-1)};
        left: 100%;
        display: block;
        height: 100%;
        width: 100%;
        border-top: ${calcRem(1)} solid #e2e7ef;
        border-bottom: ${calcRem(1)} solid #e2e7ef;
        background-color: #D3D3FF;
      }
    }
  }
`

export default (props) => {
  const {
    theme: { breakpoints },
  } = props

  return css`
    ${base({ breakpoints })}
  `
}
