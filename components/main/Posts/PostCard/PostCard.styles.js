import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`
  .link {
    display: block;
  }

  .picture {
    display: block;
    width: 100%;

    img {
      width: 100%;
    }

    &_size_l {
      min-height: ${calcRem(310)};
    }

    &_size_s {
      min-height: ${calcRem(215)};
    }
  }

  .title {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-style: normal;
    font-weight: 900;
    color: ${colors.secondary.darken100};
    margin-bottom: ${calcRem(15)};

    &_size_l {
      font-size: ${calcRem(32)};
      line-height: ${calcRem(40)};
    }

    &_size_s {
      font-size: ${calcRem(24)};
      line-height: ${calcRem(32)};
    }
  }

  .author,
  .date,
  .tag {
    display: inline-block;
    font-family: Roboto;
    font-style: normal;
    text-transform: uppercase;
    font-size: ${calcRem(10)};
    line-height: ${calcRem(16)};
  }

  .author {
    font-weight: normal;
    color: #7E8FA4;
    letter-spacing: ${calcRem(1.25)};

    &::after {
      content: "•";
      margin-left: ${calcRem(8)};
      margin-right: ${calcRem(8)};
    }
  }

  .date {
    margin-right: ${calcRem(24)};
    font-weight: normal;
    color: #7E8FA4;
    letter-spacing: ${calcRem(1.25)};
  }

  .tag {
    font-weight: 500;
    color: #5695ED;
    transition: color 150ms ease-in-out;
    letter-spacing: ${calcRem(1.25)};
  }

  &.news {
    position: relative;
    background-color: #F1F2F7;

    .link {
      flex-direction: column;
      align-items: flex-start;
      padding: 0 ${calcRem(16)} ${calcRem(16)} ${calcRem(16)};
    }

    .title-wrapper {
      display: flex;
    }

    .picture {
      width: calc(100% + ${calcRem(32)});
      margin: 0 -${calcRem(16)};
    }

    .title {
      margin-top: ${calcRem(37)};
      margin-bottom: 0;
      font-size: ${calcRem(32)};
      line-height: ${calcRem(40)};
      font-weight: bold;
    }

    .news-number {
      position: absolute;
      bottom: ${calcRem(27)};
      right: ${calcRem(27)};
      color: ${colors.secondary.darken100};
      font-family: 'Amita', sans-serif;
      font-size: ${calcRem(64)};
      line-height: ${calcRem(44)};
      font-weight: bold;
      pointer-events: none;
    }

    .date,
    .tag {
      margin-top: ${calcRem(6)};
    }

    .tag {
      display: block;
      margin-bottom: ${calcRem(64)};
    }
  }

  ${desktop.all} {
    &:not(:nth-of-type(1)):not(:nth-of-type(2)) {
      margin-top: 75px;
    }

    &.news {
      .link {
        height: 453px;
      }

      .title-wrapper {
        flex-direction: column;
        margin-bottom: 15px;
      }
    }

    .title {
      margin-top: 30px;
    }
  }

  ${tablet.all} {
    &:not(:nth-of-type(1)):not(:nth-of-type(2)) {
      margin-top: ${calcRem(60)};
    }

    .title-wrapper {
      flex-direction: column;
    }

    .picture {
      &_size_l {
        min-height: ${calcRem(220)};
      }

      &_size_s {
        min-height: ${calcRem(150)};
      }
    }

    .title {
      margin-top: ${calcRem(20)};
    }

    &.news {
      .link {
        padding: 0 ${calcRem(16)} ${calcRem(16)} ${calcRem(16)};
      }

      .title-wrapper {
        flex-direction: column;
        margin-bottom: ${calcRem(15)};
      }

      .title {
        margin-top: ${calcRem(18)};
      }

      .news-number {
        bottom: ${calcRem(16)};
        right: ${calcRem(16)};
      }

      .tag {
        margin-bottom: ${calcRem(31)};
      }
    }
  }

  ${mobile.all} {
    &:not(:first-of-type) {
      margin-top: ${calcRem(50)};
    }

    .picture {
      min-height: ${calcRem(150)};
    }

    .title {
      margin-top: ${calcRem(20)};
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
      margin-bottom: ${calcRem(10)};
    }

    &.news {
      .link {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 0;
        padding: 0 ${calcRem(12)} ${calcRem(16)} ${calcRem(16)};
      }

      .title-wrapper {
        width: 100%;
        justify-content: space-between;
      }

      .picture {
        width: ${calcRem(180)};
        margin: 0;
        order: 1;
      }

      .title {
        align-self: flex-end;
        margin-top: 0;
        margin-bottom: ${calcRem(10)};
        font-size: ${calcRem(18)};
        line-height: ${calcRem(24)};
        font-weight: 900;
      }

      .news-number {
        bottom: auto;
        right: auto;
        top: ${calcRem(44)};
        left: ${calcRem(16)};
      }

      .date,
      .tag {
        margin-top: 0;
      }

      .tag {
        display: inline-block;
        margin-bottom : 0;
      }
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .link:hover {
      .title {
        color: ${colors.primary.origin};
        transition: color 150ms ease-in-out;
      }

      .news-number {
        color: ${colors.primary.origin};
        transition: color 150ms ease-in-out;
      }
    }

    .tag:hover {
      color: #0254d8;
    }
  }
`

const dynamic = ({ breakpoints: { mobile }, size, side }) => {
  return css`
    grid-column-end: ${size === 'l' ? 'span 7' : 'span 3'};
    grid-column-start: ${side === 'r' ? size === 'l' ? 5 : 9 : 2};

    ${mobile.all} {
      grid-column: 1 / span 6;
    }
  `
}

export default props => {
  const { theme: { breakpoints, colors }, size, side } = props

  return css`
    ${base({ breakpoints, colors })}
    ${dynamic({ breakpoints, size, side})}
  `
}
