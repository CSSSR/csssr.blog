import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet }}) => css`
  & {
    display: flex;
    flex-direction: column;
  }

  .news-item {
    position: relative;
    font-family: Roboto, sans-serif;
    padding-top: ${calcRem(20)};
    padding-bottom: ${calcRem(25)};
    color: #18191B;
    transition: color 200ms ease-in;

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

  .news-item-number {
    font-family: Sweet Mavka Script;
    font-style: normal;
    font-weight: 500;
    font-size: ${calcRem(24)};
    line-height: ${calcRem(35)};
    grid-row: 1;
    grid-column: 1 / span 6;
  }

  .news-item.first .news-item-number {
    font-size: ${calcRem(32)};
    line-height: ${calcRem(46)};
  }

  .news-item-date {
    font-size: ${calcRem(10)};
    line-height: ${calcRem(16)};
    letter-spacing: ${calcRem(1.25)};
    text-transform: uppercase;
    color: #7E8FA4;
    transition: color 200ms ease-in;
    align-self: flex-end;
    grid-row: 1;
    grid-column: 2 / span 5;
    transform: translateY(${calcRem(-4)});
  }

  .news-item.first .news-item-date {
    margin-left: ${calcRem(16)};
    font-size: ${calcRem(14)};
    transform: translateY(${calcRem(-9)});
    color: #18191B;
  }

  .news-item-title {
    margin-top: ${calcRem(16)};
    font-size: ${calcRem(14)};
    line-height: ${calcRem(24)};
    font-weight: 300;
    grid-row: 2;
    grid-column: 1 / span 6;
  }


  ${tablet.all} {
    .news-item {
      padding-top: ${calcRem(19)};

      &::before {
        grid-column: 2 / span 10;
      }
    }

    .news-item.first {
      padding-top: ${calcRem(27)};

      &::after {
        grid-column: 2 / span 10;
      }
    }

    .news-item-number {
      margin-left: ${calcRem(38)};
      grid-column: 2 / span 2;
    }

    .news-item.first .news-item-number {
      margin-left: ${calcRem(22)};
    }

    .news-item-date {
      margin-top: ${calcRem(14)};
      margin-left: ${calcRem(29)};
      white-space: nowrap;
      grid-column: 3 / span 2;
      align-self: flex-start;
      transform: none;
    }

    .news-item.first .news-item-date {
      margin-top: ${calcRem(21)};
      margin-left: ${calcRem(15)};
      transform: none;
    }

    .news-item-title {
      grid-column: 5 / span 7;
      grid-row: 1;
      margin-top: ${calcRem(7)};
    }

    .news-item.first .news-item-title {
      margin-top: ${calcRem(18)};
    }
  }

  ${desktop.all} {
    .news-item {
      padding-top: 19px;

      &::before {
        grid-column: 2 / span 10;
      }
    }

    .news-item.first {
      padding-top: 23px;
      padding-bottom: 47px;

      &::after {
        grid-column: 2 / span 10;
      }
    }

    .news-item-number {
      margin-left: 10px;
      font-size: 24px;
      line-height: 35px;
      margin-left: ${calcRem(38)};
      grid-column: 2 / span 2;
    }

    .news-item.first .news-item-number {
      font-size: 36px;
      line-height: 52px;
      margin-left: 14px;
    }

    .news-item-date {
      margin-top: 12px;
      margin-left: 110px;
      white-space: nowrap;
      grid-column: 2 / span 2;
      align-self: flex-start;
      transform: none;
    }

    .news-item.first .news-item-date {
      margin-top: 26px;
      margin-left: 97px;
      transform: none;
    }

    .news-item-title {
      grid-column: 4 / span 8;
      grid-row: 1;
      margin-top: 6px;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      margin-left: 10px;
    }

    .news-item.first .news-item-title {
      margin-top: 22px;
    }
  }
`

export default props => {
  const { theme: { breakpoints }} = props

  return css`
    ${base({ breakpoints })}
  `
}
