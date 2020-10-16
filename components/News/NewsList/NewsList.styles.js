import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    display: flex;
    flex-direction: column;
    margin-top: ${calcRem(30)};
  }

  .news-item {
    font-family: Roboto, sans-serif;
    padding-top: ${calcRem(25)};
    padding-bottom: ${calcRem(25)};
    color: #18191B;
    transition: color 200ms ease-in;
    border-bottom: 1px solid rgba(155,155,155,0.5);

    &:hover {
      color: #0076FF;
    }
  }

  .news-item.first {
    border-top: 1px solid rgba(155,155,155,0.5);
  }

  ${desktop.all} {

  }

  ${desktop.l} {

  }

  ${desktop.m} {

  }

  ${desktop.s} {

  }

  ${tablet.all} {

  }

  ${mobile.all} {

  }
`

export default props => {
  const { theme: { breakpoints }} = props

  return css`
    ${base({ breakpoints })}
  `
}
