import { css } from '@emotion/react'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet, desktop}, colors }) => css`
  & {
    grid-column: 4 / span 6;
    margin-top: ${calcRem(60)};
  }

  .title {
    font-size: ${calcRem(32)};
    line-height: ${calcRem(40)};
    color: ${colors.secondary.darken100};
  }

  .morePosts {
    display: flex;
    justify-content: space-between;
    margin-top: ${calcRem(30)};

    > li {
      width: ${calcRem(320)};

      &:not(:first-of-type) {
        margin-left: ${calcRem(16)};
      }

      .title {
        margin-top: ${calcRem(20)};
        font-size: ${calcRem(24)};
        line-height: ${calcRem(32)};
      }
    }
  }

  ${desktop.all} {
    & {
      margin-top: ${calcRem(80)};
    }

    .title {
      font-size: ${calcRem(40)};
      line-height: ${calcRem(56)};
    }

    .morePosts {
      > li {
        .title {
          margin-top: ${calcRem(30)};
        }
      }
    }
  }

  ${tablet.all} {
    & {
      grid-column: 3 / span 8;
    }

    .morePosts {
      > li {
        width: ${calcRem(304)};
      }
    }
  }

  ${mobile.all} {
    & {
      grid-column: 1 / span 6;
    }

    .title {
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
    }

    .morePosts {
      flex-direction: column;

      > li {
        width: ${calcRem(328)};

        &:not(:first-of-type) {
          margin-left: 0;
        }

        .title {
          font-size: ${calcRem(18)};
          line-height: ${calcRem(24)};
        }
      }
    }
  }
`

export default (props) => {
  const { breakpoints, colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}
