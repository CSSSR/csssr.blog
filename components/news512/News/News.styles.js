import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet } }) => css`
  & {
    padding-top: ${calcRem(72)};
    background-image: url('/icons/news-bg.svg');
    background-size: ${calcRem(83)} ${calcRem(87)};
    background-repeat: no-repeat;
    background-position: 100% ${calcRem(35)};
  }

  .title,
  .news-info,
  .news-list {
    grid-column: 1 / span 6
  }

  .title {
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
      padding-top: ${calcRem(76)};
      background-size: ${calcRem(93)} ${calcRem(97)};
      background-position: 90.6% ${calcRem(58)};
    }

    .title,
    .news-info,
    .news-list {
      grid-column: 2 / span 10;
    }
  }

  ${desktop.all} {
    & {
      padding-top: 76px;
      background-size: ${calcRem(92)} ${calcRem(94)};
      background-position: 86.6% ${calcRem(53)};
    }

    .title,
    .news-info,
    .news-list {
      grid-column: 2 / span 10;
    }

    .title {
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
