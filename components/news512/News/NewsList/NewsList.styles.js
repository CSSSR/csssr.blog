import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    display: flex;
    flex-direction: column;
  }

  .news-item {
    position: relative;
    padding-top: ${calcRem(20)};
    padding-bottom: ${calcRem(25)};

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 1px solid rgba(155,155,155,0.5);
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover,
      &:hover .news-item-date,
      &.first:hover .news-item-date {
        color: #0076FF;
      }
    }
  }

  .news-item.first {
    padding-top: ${calcRem(25)};

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      border-bottom: 1px solid rgba(155,155,155,0.5);
    }
  }

  .news-item-link {
    display: flex;
    font-family: Roboto, sans-serif;
    color: #18191B;
    transition: color 200ms ease-in;
  }

  .news-item-wrapper {
    display: flex;
  }

  .news-item-number {
    margin-right: ${calcRem(22)};
    font-family: Sweet Mavka Script;
    font-style: normal;
    font-weight: 500;
    font-size: ${calcRem(24)};
    line-height: ${calcRem(35)};
    text-align: right;
  }

  .news-item.first .news-item-number {
    font-size: ${calcRem(32)};
    line-height: ${calcRem(46)};
  }

  .news-item-date {
    align-self: flex-start;
    width: ${calcRem(112)};
    margin-right: ${calcRem(22)};
    font-size: ${calcRem(10)};
    line-height: ${calcRem(16)};
    letter-spacing: ${calcRem(1.25)};
    text-transform: uppercase;
    color: #7E8FA4;
    transition: color 200ms ease-in;
    text-align: center;
  }

  .news-item.first .news-item-date {
    color: #18191B;
  }

  .news-item-title {
    margin-top: ${calcRem(16)};
    font-size: ${calcRem(14)};
    line-height: ${calcRem(24)};
    font-weight: 300;
  }

  ${mobile.all} {
    .news-item-link {
      flex-direction: column;
    }

    .news-item.first .news-item-date {
      font-size: ${calcRem(14)};
    }

    .news-item-number {
      margin-right: ${calcRem(16)};
      text-align: left;
    }

    .news-item-date {
      align-self: flex-end;
      width: auto;
      margin-right: 0;
      transform: translateY(${calcRem(-4)});
      text-align: left;
    }

    .news-item.first .news-item-date {
      transform: translateY(${calcRem(-9)});
    }
  }

  ${tablet.all} {
    .news-item {
      padding-top: ${calcRem(18)};
    }

    .news-item.first {
      padding-top: ${calcRem(8)};
    }

    .news-item-number {
      width: ${calcRem(84)};
    }

    .news-item-date {
      margin-top: ${calcRem(13)};
    }

    .news-item.first .news-item-date {
      margin-top: ${calcRem(21)};
    }

    .news-item-title {
      margin-top: ${calcRem(7)};
    }

    .news-item.first .news-item-title {
      margin-top: ${calcRem(17)};
    }
  }

  ${desktop.all} {
    .news-item {
      padding-top: ${calcRem(14)};
    }

    .news-item.first {
      padding-top: ${calcRem(8)};
    }

    .news-item-number {
      width: ${calcRem(78)};
      font-size: 24px;
      line-height: 35px;
    }

    .news-item-date {
      margin-top: ${calcRem(15)};
    }

    .news-item.first .news-item-date {
      margin-top: ${calcRem(21)};
    }

    .news-item-title {
      margin-top: ${calcRem(10)};
      font-weight: normal;
      font-size: 16px;
    }

    .news-item.first .news-item-title {
      margin-top: ${calcRem(17)};
    }
  }

  @media (hover: hover) and (pointer: fine) {
    & li {
      cursor: pointer;
    }
  }
`

export default props => {
  const { theme: { breakpoints } } = props

  return css`
    ${base({ breakpoints })}
  `
}
