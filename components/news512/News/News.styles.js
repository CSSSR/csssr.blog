import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet } }) => css`
  & {
    background-image: url('/icons/news-bg.svg');
    background-size: ${calcRem(83)} ${calcRem(87)};
    background-repeat: no-repeat;
    background-position: 100% ${calcRem(104)};
  }

  .categories,
  .title,
  .news-info,
  .nav-list {
    grid-column: 1 / span 6;
  }

  .title {
    margin-top: ${calcRem(66)};
    color: #18191B;
  }

  .news-info {
    font-family: 'Roboto', sans-serif;
    font-size: ${calcRem(10)};
    line-height: ${calcRem(16)};
    color: #7E8FA4;
    letter-spacing: ${calcRem(1.25)};
    text-transform: uppercase;
    margin-top: ${calcRem(15)};
    margin-bottom: ${calcRem(30)};
  }

  .tag {
    margin-left: ${calcRem(24)};
    color: #5695ED;
  }

  ${tablet.all} {
    & {
      background-size: ${calcRem(93)} ${calcRem(97)};
      background-position: 90.6% ${calcRem(126)};
    }

    .categories,
    .title,
    .news-info,
    .nav-list {
      grid-column: 2 / span 10;
    }

    .title {
      margin-top: ${calcRem(76)};
    }
  }

  ${desktop.all} {
    & {
      background-size: ${calcRem(92)} ${calcRem(96)};
      background-position: 86.6% ${calcRem(126)};
    }

    .categories,
    .title,
    .news-info,
    .nav-list {
      grid-column: 2 / span 10;
    }

    .title {
      margin-top: ${calcRem(77)};
      font-size: 32px;
      line-height: 40px;
    }
  }
`

export default props => {
  const { theme: { breakpoints } } = props

  return css`
    ${base({ breakpoints })}
  `
}
