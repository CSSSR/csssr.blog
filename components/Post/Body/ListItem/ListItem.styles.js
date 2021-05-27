import { css } from '@emotion/react';

import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }}) => css`
  & {
    font-family: 'Roboto','Arial',sans-serif;
    font-size: ${calcRem(16)};
    line-height:${calcRem(24)};
    font-weight: 300;
    position: relative;
    padding-left: ${calcRem(29)};
    margin-top: ${calcRem(16)};
    color: #18191B;

    ul &::before {
      position: absolute;
      content: '';
      top: ${calcRem(10)};
      left: ${calcRem(13)};
      width: ${calcRem(4)};
      height: ${calcRem(4)};
      background-color: #18191B;
    }

    ol &::before {
      counter-increment: section;
      content: counters(section, ".") ".";
      font-weight: 500;
      position: absolute;
      top: 0;
      right: calc(100% - ${calcRem(23)});
      text-align: right;
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(8)};
      padding-left: ${calcRem(26)};
      font-size: ${calcRem(14)};
    }

    ul &::before {
      top: ${calcRem(10)};
      left: ${calcRem(12)};
    }

    ol &::before {
      right: calc(100% - ${calcRem(20)});
    }
  }

`

export default props => {
  const { theme: { breakpoints }} = props

  return css`
    ${base({ breakpoints })}
  `
}
