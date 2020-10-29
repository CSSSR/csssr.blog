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

    .post-meta {
      margin-top: ${calcRem(20)};
      grid-column: 1 / span 6;
      grid-row: 3;
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
