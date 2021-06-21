import { css } from '@emotion/react'

import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`

  .link {
    display: flex;
    flex-direction: column;
  }

  .post-img {
    display: block;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit:cover;
    }
  }

  .post-title {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-style: normal;
    font-size: ${calcRem(18)};
    font-weight: 900;
    line-height: ${calcRem(24)};
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
    .post-img {
      height: ${calcRem(216)};
    }

    .post-title {
      margin-top: 20px;
    }
  }

  ${tablet.all} {

    .post-title {
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
      margin-top: ${calcRem(20)};
    }
  }

  ${mobile.all} {
    .post-img {
      height: ${calcRem(150)};
    }

    .post-title {
      margin-top: ${calcRem(20)};
      margin-bottom: 0;
    }

    .bottom {
      margin-top: ${calcRem(7)};
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .link:hover {
      .post-title {
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

const StyledErrorPostCard = props => {
  const { theme: { breakpoints, colors } } = props

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledErrorPostCard
