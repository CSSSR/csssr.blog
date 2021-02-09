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
