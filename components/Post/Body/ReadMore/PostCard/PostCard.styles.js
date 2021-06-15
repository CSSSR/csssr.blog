import { css } from '@emotion/react'

import calcRem from '../../../../../utils/style/calcRem'

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
  }

  .title {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-style: normal;
    font-weight: 900;
    color: ${colors.secondary.darken100};
    margin-bottom: ${calcRem(15)};

    & > span {
      white-space: nowrap;
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

  ${desktop.all} {
    & {
      margin-top: 75px;
      &:nth-of-type(1),
      &:nth-of-type(2) {
        margin-top: 0;
      }
    }

    .title {
      margin-top: 30px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: 60px;

      &:nth-of-type(1),
      &:nth-of-type(2) {
        margin-top: 0;
      }
    }

    .title-wrapper {
      flex-direction: column;
    }

    .title {
      margin-top: ${calcRem(20)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(50)};

      &:nth-of-type(1) {
        margin-top: 0;
      }
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



const StyledPostCard = props => {
  const { theme: { breakpoints, colors }} = props

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledPostCard
