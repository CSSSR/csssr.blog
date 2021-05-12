import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }, colors }) => css`
  & {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    background-color: white;
    padding: ${calcRem(10)};
  }

  .picture {
    max-width: ${calcRem(136)};

    & img {
      max-width: ${calcRem(136)};
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: ${calcRem(16)};
  }

  .link-item {
    display: inherit;

    &:not(:first-of-type) {
      margin-top: ${calcRem(14)};
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: #0254D8;
      }
    }
  }

  .link {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: ${calcRem(14)};
    line-height: ${calcRem(18)};
    font-weight: 300;
    color: ${colors.primary.origin};
    text-decoration: underline;
  }

  ${tablet.all} {
    & {
      margin-right: auto;
    }

    .picture {
      align-self: center;
    }
  }

  ${mobile.all} {
    & {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: unset;
      padding-left: 0;
      transform: unset;
    }

    &.hidden_mobile {
      display: none;
    }

    .picture {
      display: none;
    }

    .links {
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 0;
    }

    .link-item {
      &:not(:first-of-type) {
        margin-top: 0;
        margin-left: 16px;
      }

      &:last-of-type {
        margin-top: ${calcRem(15)};
        margin-left: 0;
      }
    }
   }
`

const StyledPostShare = (props) => {
  const { breakpoints, colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}

export default StyledPostShare
