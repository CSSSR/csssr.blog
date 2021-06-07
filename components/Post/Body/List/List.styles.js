import { css } from '@emotion/react';

import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }}) => css`
  & {
    list-style: none;
    grid-column: 4 / span 6;
    padding-bottom: ${calcRem(5)};

    & li ul,
    & li ol {
      padding-top: ${calcRem(0)};
      padding-left: ${calcRem(14)};
    }

    ol& {
      counter-reset: section;
    }
  }

  ${mobile.all} {
    & {
      grid-column: 1 / span 6;
    }

    & li ul,
    & li ol {
      padding-left: ${calcRem(12)};
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
