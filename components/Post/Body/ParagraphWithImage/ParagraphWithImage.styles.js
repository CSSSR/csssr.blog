import { css } from '@emotion/react'

import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile } }) => css`
  & {
    padding-top: ${calcRem(55)};
    grid-column: 4 / span 6;
  }

  & > ul li {
    display: inline;
  }

  & > h2:first-of-type:not(p+h2),
  & > h3:first-of-type:not(p+h3),
  & > p:first-of-type:not(h2+p):not(h3+p) {
    padding-top: 0;
  }

  .img-wrap {
    display: block;
    width: ${calcRem(208)};
    height: ${calcRem(140)};
    float: left;
    margin-top: 0;
    margin-right: ${calcRem(16)};
    grid-column: none;

    img {
      width: 100%;
      height: auto;
    }
  }

  ${tablet.all} {
    & {
      grid-column: 3 / span 8;
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(45)};
      grid-column: 1 / span 6;
    }

    .img-wrap {
      width: ${calcRem(104)};
      height: ${calcRem(70)};
      margin-right: ${calcRem(8)};
    }
  }
`

const StyledParagraphWithImage = props => {
  const {
    theme: { breakpoints},
  } = props

  return css`
    ${base({ breakpoints })}
  `
}

export default StyledParagraphWithImage
