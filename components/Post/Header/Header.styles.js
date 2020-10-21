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

  .newsTitle > i {
    font-weight: 700;
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

  .title {
    position: relative;
    z-index: 2;
    grid-column: 4 / span 4;
    grid-row: 2;
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

  .newsPicture {
    grid-column: 9 / span 2;
    width: 120px;
    min-height: auto;
  }

  ${desktop.all} {
    & {
      padding-top: 37px;
    }

    &.newsHeader {
      padding-top: 36px;
    }

    .title {
      margin-top: 35px;
    }

    .newsTitle {
      margin-top: 30px;
    }

    .picture {
      margin-top: 27px;
    }

    .newsPicture {
      margin-top: 2px;
      margin-left: -23px;
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

    .picture {
      min-height: ${calcRem(235)};
      margin-top: ${calcRem(12)};
      grid-column: 7 / span 4;
    }

    .newsPicture {
      grid-column: 10 / span 2;
      width: ${calcRem(96)};
      height: ${calcRem(101)};
      margin-top: 0;
      min-height: auto;
      transform: translateY(${calcRem(-4)});
    }
  }

  ${mobile.all} {
    .picture {
      min-height: ${calcRem(150)};
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

    .newsTitle {
      margin-top: 0;
      font-size: ${calcRem(40)};
      line-height: ${calcRem(56)};
    }

    .post-meta {
      margin-top: ${calcRem(20)};
      grid-column: 1 / span 6;
      grid-row: 3;
    }

    .newsPicture {
      display: none;
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
