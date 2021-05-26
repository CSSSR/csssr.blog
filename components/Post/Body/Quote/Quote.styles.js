import { css } from '@emotion/react'

import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }, colors}) => css`
  & {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-weight: 300;
    padding-top: ${calcRem(45)};
    padding-bottom: ${calcRem(30)};
    grid-column: 4 / span 6;
  }

  &.type_black {
    .quotes {
      color: #D2D2FF;
    }

    .quote-text,
    .author {
      color: ${colors.secondary.darken100};
    }
  }

  &.type_blue {
    .quotes {
      color: ${colors.secondary.darken100};
    }

    .quote-text {
      color: #0254D8;
    }
  }

  .quote {
    padding-left: ${calcRem(226)};
    position: relative;

    .quotes {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: ${calcRem(141)};
      width: ${calcRem(50)};
      height: ${calcRem(34)};
    }
  }

  .quote-text {
    font-size: ${calcRem(20)};
    line-height: ${calcRem(32)};
    color: #0254D8;
  }

  .quote-text > p:first-of-type {
    padding-top: 0;
  }

  .quote-text > p:last-of-type {
    padding-bottom: 0;
  }

  .author {
    display: inline-block;
    width: 100%;
    margin-top: ${calcRem(25)};
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    font-weight: 900;
  }

  .author-post  {
    display: inline-block;
    width: 100%;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(24)};
  }

  .quote-link {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(24)};
    font-weight: 300;
  }

  ${tablet.all} {
    & {
      grid-column: 3 / span 8;
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(35)};
      padding-bottom: ${calcRem(20)};
      grid-column: 1 / span 6;
    }

    .quote {
      padding-left: ${calcRem(56)};

      .quotes {
        top: ${calcRem(4)};
        left: 0;
        width: ${calcRem(36)};
        height: ${calcRem(24)};
      }
    }

    .quote-text {
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }

    .author {
      margin-top: ${calcRem(15)};
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }

    .quote-link {
      font-size: ${calcRem(10)};
      font-weight: 400;
      line-height: ${calcRem(16)};
    }
  }
`

const StyledQuote = props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledQuote
