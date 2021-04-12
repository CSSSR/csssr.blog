import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }, colors }) => css`
  & {
    max-width: ${calcRem(120)};
    margin-left: auto;
    margin-bottom: ${calcRem(61)};
    background-color: white;
    transform: translate(${calcRem(39)}, ${calcRem(18)});
  }

  .picture {
    max-width: ${calcRem(120)};
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
      margin-left: auto;
      margin-right: auto;
      margin-bottom: ${calcRem(51)};
      transform: unset;
    }
  }

  ${mobile.all} {
    & {
      display: none;
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