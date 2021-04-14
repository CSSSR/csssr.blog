import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }, colors }) => css`
  & {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-top: 13px;
    margin-bottom: ${calcRem(67)};
    background-color: white;
    transform: translate(${calcRem(19)}, ${calcRem(18)});
  }

  .picture {
    max-width: ${calcRem(120)};

    & img {
      max-width: ${calcRem(120)};
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
      margin-top: ${calcRem(22)};
      margin-left: auto;
      margin-right: auto;
      margin-bottom: ${calcRem(47)};
      transform: unset;
    }

    .picture {
      align-self: center;
    }

    .links {
      margin-top: ${calcRem(20)};
      margin-left: ${calcRem(20)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: unset;
      transform: unset;
    }

    &.hidden_mobile_bottom {
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