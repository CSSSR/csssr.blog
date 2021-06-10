import { css } from '@emotion/react'

import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors }) => css`
  & {
    font-family: 'Roboto', 'Arial', sans-serif;
    color: ${colors.secondary.darken100};
  }

  & + & .wrap {
    border-top: 1px solid rgba(155, 155, 155, 0.5);
  }

  .picture {
    grid-column: 1 / span 3;
    width: ${calcRem(216)};
    height: ${calcRem(168)};

    img {
      width: 100%;
      height: 100%;
    }
  }

  .content {
    grid-column: 4 / span 9;
  }

  .link {
    color: ${colors.secondary.darken100};
  }

  .wrap {
    padding-top: ${calcRem(24)};
    padding-bottom: ${calcRem(24)};
  }

  .tag {
    font-weight: 300;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    color: ${colors.secondary.darken100};
  }

  .date {
    font-weight: 300;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    padding-left: ${calcRem(15)};
    color: #9b9b9b;
  }

  .title {
    margin-top: ${calcRem(10)};
    font-weight: 900;
    font-size: ${calcRem(24)};
    line-height: ${calcRem(32)};
  }

  .description {
    font-weight: 300;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    margin-top: ${calcRem(10)};
  }

  ${mobile.all} {
    .wrap {
      padding-top: ${calcRem(20)};
      padding-bottom: ${calcRem(20)};
    }

    .picture {
      width: ${calcRem(328)};
      height: ${calcRem(150)};
      grid-column: 1 / span 6;
      grid-row: 1;
    }

    .content {
      grid-column: 1 / span 6;
      grid-row: 2;
    }

    .tag,
    .date {
      font-size: ${calcRem(14)};
    }

    .title {
      font-size: ${calcRem(22)};
    }

    .description {
      display: none;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .link:hover {
      .title {
        color: ${colors.primary.origin};
        transition: color 150ms ease-in-out;
      }
    }

    .tag:hover {
      color: #0254d8;
    }
  }
`

const StyledPostCard = (props) => {
  const {
    theme: { breakpoints, colors },
  } = props

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledPostCard
