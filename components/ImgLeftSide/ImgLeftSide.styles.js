import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet } }) => css`
  & {
    margin-top: 30px;
    margin-bottom: 30px;
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
      margin-right: 40px;
      margin-bottom: 7px
    }
  }

  ${mobile.all} {
    .img-wrap {
      width: ${calcRem(104)};
      margin-right: 8px;
      margin-bottom: 7px
    }
  }
`

export default (props) => {
  const {
    theme: { breakpoints, colors },
  } = props

  return css`
    ${base({ breakpoints, colors })}
  `
}
