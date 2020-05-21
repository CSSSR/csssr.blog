import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet } }) => css`
  & {
    margin-top: ${calcRem(30)};
    margin-bottom: ${calcRem(30)};
  }

  .img-wrap {
    width: ${calcRem(270)};
    float: left;
    margin-right: 17px;
    margin-bottom: 4px;

    img {
      width: 100%;
      height: auto;
    }
  }

  ${tablet.all} {
    .img-wrap {
      width: ${calcRem(184)};
      margin-right: ${calcRem(40)};
      margin-bottom: ${calcRem(7)};
    }
  }

  ${mobile.all} {
    .img-wrap {
      width: ${calcRem(104)};
      margin-right: ${calcRem(8)};
      margin-bottom: ${calcRem(7)};
    }
  }
`

export default (props) => {
  const {
    theme: { breakpoints},
  } = props

  return css`
    ${base({ breakpoints })}
  `
}
