import { css } from '@emotion/react'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    padding-top: ${calcRem(50)};
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
    min-height: ${calcRem(140)};
    float: left;
    margin-top: 0;
    margin-right: ${calcRem(16)};
    grid-column: none;

    img {
      width: 100%;
      height: auto;
    }
  }

  .img-wrap.side_right {
    width: ${calcRem(184)};
    min-height: ${calcRem(128)};
    float: right;
    margin-right: 0;
    margin-left: ${calcRem(40)};
  }

  ${desktop.all} {
    .img-wrap.side_right {
      transform: translateX(-32px);
    }

    &.with_right-side-image h2{
      font-size: 18px;
      line-height: 24px;
    }
  }

  ${tablet.all} {
    & {
      grid-column: 3 / span 8;
    }

    .img-wrap {
      /* TODO: убрать фиксированную ширину когда появятся адаптивные изображения */
      width: ${calcRem(184)};
      min-height: ${calcRem(128)};
      margin-right: ${calcRem(40)};
    }

    &.with_right-side-image h2 {
      margin-top: 0;
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
    }

    &.with_right-side-image > p {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(40)};
      grid-column: 1 / span 6;
    }

    .img-wrap {
      /* TODO: убрать фиксированную ширину когда появятся адаптивные изображения */
      width: ${calcRem(104)};
      min-height: ${calcRem(72)};
      margin-right: ${calcRem(8)};
    }

    .img-wrap.side_right {
      width: auto;
      min-width: ${calcRem(104)};
      max-width: ${calcRem(108)};
      min-height: unset;
      margin-top: ${calcRem(7)};
      margin-left: ${calcRem(6)};
    }

    &.with_right-side-image h2 {
      margin-top: 0;
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
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
