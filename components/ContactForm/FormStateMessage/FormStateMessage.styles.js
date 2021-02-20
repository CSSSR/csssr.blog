import { css } from '@emotion/react'
import { calcRem } from '../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }}) => css`
  & {
    display: block;
    margin-left: ${calcRem(16)};
    transform: scale(1);
    transition: transform 0.3s ease-out;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(18)};

    &.invisible {
      transform: scale(0);
    }
  }

  & span.message {
    display: inline-block;
    margin-right: ${calcRem(2)};
    margin-left: 0 !important;
  }
  
  &.post span.message {
    display: inline;
  }

  .reset-button {
    display: block;
    margin-left: ${calcRem(1)} !important;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    background: none;
    color: #0076ff;
    border: none;
    text-decoration: underline;
    cursor: pointer;

    & br {
      display: none;
    }

    & span.dot {
      display: inline-block;
      width: unset !important;
      margin-left: 0 !important;
      color: #4A4A4A;
      text-decoration: none;
    }
  }

  &.post .reset-button {
    display: inline;

    & br {
      display: block;
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(10)};
      margin-left: 0;
    }
    
    span.message {
      max-width: unset;
    }
  }
`

const StyledFormStateMessage = (props) => {
  const { breakpoints } = props.theme
  return css`
    ${base({ breakpoints })}
  `
}
export default StyledFormStateMessage
