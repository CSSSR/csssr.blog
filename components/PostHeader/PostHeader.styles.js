import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }}) => css`
  & {
    margin-top: ${calcRem(35)};
    margin-bottom: ${calcRem(66)};
  }

  .title {
    position: relative;
    z-index: 2;
    grid-column: 4 / span 4;
    grid-row: 1;

    & > span {
      font-family: 'Amita';
      font-style: normal;
      font-weight: normal;
    }
  }

  .picture {
    display: block;
    width: 100%;
    position: relative;
    z-index: 1;
    grid-column: 7 / span 3;
    grid-row: 1;
  }

  .img {
    width: 100%;
    height: auto;
  }

  ${tablet.all} {
    .title {
      font-size: 40px;
      line-height: 56px;
      grid-column: 3 / span 5;
    }

    .picture {
      grid-column: 7 / span 4;
    }
  }

  ${mobile.all} {
    & {
      margin-top: 0;
      margin-bottom: ${calcRem(20)};
    }

    .picture {
      grid-column: 1 / span 6;
      grid-row: 1;
    }

    .title {
      font-size: 36px;
      line-height: 44px;
      margin-top: ${calcRem(30)};
      grid-column: 1 / span 6;
      grid-row: 2;
    }
  }
`

export default props => {
  const { theme: { breakpoints } } = props

  return css`
    ${base({ breakpoints })}
  `
}
