import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-bottom: 66px;
  }

  .post-meta {
    grid-column: 4 / span 4;
    grid-row: 1;
  }

  .tag,
  .date {
    margin-top: ${calcRem(15)};
    display: inline-block;
    font-family: Roboto;
    font-style: normal;
    font-size: ${calcRem(10)};
    line-height: ${calcRem(16)};
    text-transform: uppercase;
  }

  .tag {
    font-weight: 500;
    color: #5695ED;
  }

  .date {
    margin-left: ${calcRem(16)};
    display: inline-block;
    font-weight: normal;
    color: #7E8FA4;
  }

  .title {
    position: relative;
    z-index: 2;
    grid-column: 4 / span 4;
    grid-row: 2;

    & > i {
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
    grid-row: 2;
  }

  .img {
    width: 100%;
    height: auto;
  }

  ${desktop.all} {
    & {
      padding-top: 37px;
    }

    .title {
      margin-top: 35px;
    }

    .picture {
      margin-top: 27px;
    }
  }

  ${tablet.all} {
    & {
      padding-top:  ${calcRem(30)};
    }

    .post-meta {
      grid-column: 3 / span 5;
    }

    .title {
      margin-top: ${calcRem(20)};
      font-size: ${calcRem(40)};
      line-height: ${calcRem(56)};
      grid-column: 3 / span 5;
    }

    .picture {
      margin-top: ${calcRem(12)};
      grid-column: 7 / span 4;
    }
  }

  ${mobile.all} {
    & {
      margin-bottom: ${calcRem(20)};
    }

    .picture {
      grid-column: 1 / span 6;
      grid-row: 1;
    }

    .title {
      margin-top: ${calcRem(30)};
      grid-column: 1 / span 6;
      grid-row: 2;
      font-size: ${calcRem(36)};
      line-height: ${calcRem(44)};
    }

    .post-meta {
      margin-top: ${calcRem(20)};
      grid-column: 1 / span 6;
      grid-row: 3;
    }
  }
`

export default props => {
  const { theme: { breakpoints } } = props

  return css`
    ${base({ breakpoints })}
  `
}
