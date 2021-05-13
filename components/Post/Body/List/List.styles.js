import { css } from '@emotion/react';
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }}) => css`
  & {
    list-style: none;
    grid-column: 4 / span 6;

    &.is_ordered {
      counter-reset: counter;
    }

    &.is_ordered li {
      counter-increment: counter;
    }

    &.is_ordered li::before {
      content: counter(counter) ". ";
    }

    &:not(.is_ordered) li::before {
      top: ${calcRem(10)};
      left: ${calcRem(5)};
      width: ${calcRem(4)};
      height: ${calcRem(4)};
      background-color: #18191B;
    }

    & li {
      padding-left: ${calcRem(21)};
    }

    & li ul,
    & li ol {
      padding-left: ${calcRem(10)};
    }

    li.list_item:not(:first-of-type) {
      margin-top: ${calcRem(16)};
    }

    & li:first-of-type {
      margin-top: 0;
    }

    & li::before {
      top: 0;
      font-family: 'Roboto', 'Arial', sans-serif;
      font-weight: 500;
      border: none;
    }

    & li p:first-of-type {
      margin-top: 0;
    }
  }

  ${mobile.all} {
    & {
      grid-column: 1 / span 6;
      margin-top: ${calcRem(9)};

      & li.list_item:not(:first-of-type) {
        margin-top: ${calcRem(8)};
      }

      & li::before {
        font-size: ${calcRem(14)};
        line-height: ${calcRem(24)};
      }
    }
  }

`

const StyledList = props => {
  const { theme: { breakpoints }} = props

  return css`
    ${base({ breakpoints })}
  `
}

export default StyledList
