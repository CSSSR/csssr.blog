import { css } from '@emotion/react'

import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile } }) => css`
  & {
    padding-top: ${calcRem(40)};
  }

  .post-meta {
    grid-column: 4 / span 4;
    grid-row: 1;
    margin-bottom: ${calcRem(-8)};
  }

  .tag,
  .date,
  .author {
    vertical-align: top;
    display: inline-block;
    font-family: Roboto;
    font-style: normal;
    font-size: ${calcRem(10)};
    line-height: ${calcRem(16)};
    letter-spacing: ${calcRem(1.25)};
    text-transform: uppercase;
    padding-bottom: ${calcRem(8)};
  }

  .title > i {
    font-style: normal;
    font-weight: normal;
  }

  .title > span {
    white-space: nowrap;
  }

  .author {
    font-weight: normal;
    color: #7e8fa4;

    &::after {
      content: '•';
      margin-left: ${calcRem(8)};
      margin-right: ${calcRem(8)};
    }
  }

  .tag {
    color: #5695ed;
    transition: color 150ms ease-in-out;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: #0254d8;
      }
    }
  }

  .date {
    margin-right: ${calcRem(24)};
    display: inline-block;
    font-weight: normal;
    color: #7e8fa4;
  }

  .title {
    margin-top: ${calcRem(35)};
    position: relative;
    z-index: 2;
    grid-column: 4 / span 4;
    grid-row: 2;
    color: #18191b;
  }

  .episode-number {
    font-family: 'Sweet Mavka Script', sans-serif;
    font-weight: 700;
    color: #18191b;
  }

  .news-cover {
    z-index: 1;
    grid-column: 7 / span 3;
    grid-row: 2;
    display: flex;
    justify-content: flex-end;
  }

  .news-cover-img {
    width: ${calcRem(172)};
    height: ${calcRem(91)};
  }

  .picture {
    display: block;
    width: 100%;
    min-height: ${calcRem(230)};
    position: relative;
    z-index: 1;
    grid-column: 7 / span 3;
    grid-row: 2;
    margin-top: ${calcRem(16)};

    & img {
      width: 100%;
      height: auto;
    }
  }

  ${tablet.all} {
    .post-meta,
    .title {
      grid-column: 3 / span 5;
    }

    .picture, .news-cover {
      grid-column: 7 / span 4;
    }
  }

  ${mobile.all} {
    & {
      padding-top: 0;
    }

    .title {
      grid-column: 1 / span 6;
      grid-row: 2;
      margin-top: ${calcRem(30)};
      font-size: ${calcRem(36)};
      line-height: ${calcRem(44)};
    }

    .picture {
      min-height: ${calcRem(150)};
      grid-column: 1 / span 6;
      grid-row: 1;
    }

    .post-meta {
      margin-top: ${calcRem(20)};
      grid-column: 1 / span 6;
      grid-row: 3;
    }

    &.type_news {
      .title {
        grid-row: 1;

        .episode-number {
          font-size: ${calcRem(36)};
          line-height: ${calcRem(44)};
        }
      }

      .post-meta {
        grid-row: 2;
      }

      .news-cover {
        display: none;
      }
    }
  }
`

const dynamic = (language) => css`
  .title > i {
    font-family: ${language === 'ru' ? 'Sweet Mavka Script' : 'Amita'};
  }
`

const StyledHeader = (props) => {
  const {
    theme: { breakpoints },
    language,
  } = props

  return css`
    ${base({ breakpoints })}
    ${dynamic(language)}
  `
}

export default StyledHeader
