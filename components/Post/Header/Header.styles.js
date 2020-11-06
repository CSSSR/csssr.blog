import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  .post-meta {
    grid-column: 4 / span 4;
    grid-row: 1;
  }

  .tag,
  .date,
  .author {
    display: inline-block;
    font-family: Roboto;
    font-style: normal;
    font-size: ${calcRem(10)};
    line-height: ${calcRem(16)};
    letter-spacing: ${calcRem(1.25)};
    text-transform: uppercase;
  }

  .title > i {
    font-style: normal;
    font-weight: normal;
  }

  .title > span {
    white-space: nowrap;
  }

  .author {
    margin-left: ${calcRem(1)};
    display: inline-block;
    font-weight: normal;
    color: #7E8FA4;

    &::after {
      content: "•";
      margin-left: ${calcRem(8)};
      margin-right: ${calcRem(8)};
    }
  }

  .tag {
    font-weight: 500;
    color: #5695ed;
    transition: color 150ms ease-in-out;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: #0254d8;
      }
    }
  }

  .date {
    margin-right: ${calcRem(22)};
    display: inline-block;
    font-weight: normal;
    color: #7E8FA4;
  }

  .title-wrapper {
    display: flex;
    position: relative;
    z-index: 2;
    grid-column: 4 / span 4;
    grid-row: 2;
  }

  .title {
    position: relative;
    z-index: 2;
    grid-column: 4 / span 4;
    grid-row: 2;
    color: #18191B;
  }

  .episode-number {
    margin-left: ${calcRem(10)};
    font-family: 'Sweet Mavka Script', sans-serif;
    font-weight: 700;
    color: #18191B;
  }

  .picture {
    display: block;
    width: 100%;
    min-height: ${calcRem(230)};
    position: relative;
    z-index: 1;
    grid-column: 7 / span 3;
    grid-row: 2;

    & img {
      width: 100%;
      height: auto;
    }
  }

  &.type_news {
    .title {
      margin-top: 0 !important;
    }

    .picture {
      grid-column: 9 / span 2;
      width: ${calcRem(120)};
      min-height: auto;
    }
  }

  ${desktop.all} {
    & {
      padding-top: 37px;
    }

    .title {
      margin-top: 35px;
    }

    .title-wrapper {
      margin-top: 30px;
    }

    .picture {
      margin-top: 27px;
    }

    &.type_news {
      .picture {
        margin-top: 2px;
        margin-left: -23px;
      }
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(25)};
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

    .episode-number {
      font-size: ${calcRem(40)};
      line-height: ${calcRem(56)};
    }

    .title-wrapper {
      margin-top: ${calcRem(20)};
      grid-column: 3 / span 5;
    }

    .picture {
      min-height: ${calcRem(235)};
      margin-top: ${calcRem(12)};
      grid-column: 7 / span 4;
    }

    &.type_news {
      .picture {
        grid-column: 10 / span 2;
        width: ${calcRem(96)};
        height: ${calcRem(101)};
        margin-top: 0;
        min-height: auto;
        transform: translateY(${calcRem(-4)});
      }
    }
  }

  ${mobile.all} {
    .picture {
      min-height: ${calcRem(150)};
      grid-column: 1 / span 6;
      grid-row: 1;
    }

    .title-wrapper {
      margin-top: ${calcRem(30)};
      grid-column: 1 / span 6;
      grid-row: 1;
    }

    .title {
      font-size: ${calcRem(36)};
      line-height: ${calcRem(44)};
    }

    .episode-number {
      font-size: ${calcRem(40)};
      line-height: ${calcRem(56)};
    }

    .title-wrapper {
      margin-top: 0;
      grid-column: 1 / span 6;
    }

    .post-meta {
      margin-top: ${calcRem(20)};
      grid-column: 1 / span 6;
      grid-row: 2;
    }

    &.type_news {
      .title {
        font-size: ${calcRem(40)};
        line-height: ${calcRem(56)};
      }

      .picture {
        display: none;
      }
    }
  }
`

const dynamic = (language) =>  css`
  .title > i {
    font-family: ${language === 'ru' ? 'Sweet Mavka Script' : 'Amita'};
  }
`

export default props => {
  const { theme: { breakpoints }, language } = props

  return css`
    ${base({ breakpoints })}
    ${dynamic(language)}
  `
}
