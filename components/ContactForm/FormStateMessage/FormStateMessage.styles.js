import { css } from '@emotion/core'
import { calcRem } from '../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }}) => css`
  & {
    display: inline-block;
    margin-left: ${calcRem(16)};
    transform: scale(1);
    transition: transform 0.3s ease-out;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(18)};

    &.invisible {
      transform: scale(0);
    }
  }

  span.message {
    display: inline;
    margin-right: ${calcRem(2)};
    margin-left: 0 !important;
  }

  .reset-button {
    display: inline;
    margin-left: ${calcRem(1)} !important;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    background: none;
    color: #0076ff;
    border: none;
    text-decoration: underline;
    cursor: pointer;
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(10)};
      margin-left: 0;
    }
  }
`

export default (props) => {
  const { breakpoints } = props.theme

  return css`
    ${base({ breakpoints })}
  `
}
