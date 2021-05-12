import { css } from '@emotion/react';
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }}) => css`
  & {
    padding-top: ${calcRem(20)};
    padding-bottom: ${calcRem(5)};
    color: #18191B;
    grid-column: 4 / span 6;

    a {
      font-size: inherit;
      line-height: inherit;
      font-weight: inherit;
    }

    &:first-of-type strong:first-of-type {
      font-style: normal;
      font-weight: normal;
      font-size: ${calcRem(76)};
      line-height: ${calcRem(32)};
      padding-top: ${calcRem(20)};
      padding-left: ${calcRem(4)};
      float: left;
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(15)};
      grid-column: 1 / span 6;
    }

    &:first-of-type strong:first-of-type {
      padding-right: ${calcRem(11)};
      font-size: ${calcRem(64)};
      line-height: ${calcRem(32)};
    }
  }

`

const dynamic = (language) =>  css`
  &:first-of-type strong:first-of-type {
    padding-right: ${language === 'ru' ? calcRem(23) : calcRem(7)};
    font-family: ${language === 'ru' ? 'Sweet Mavka Script' : 'Amita'};
  }
`

export default props => {
  const { theme: { breakpoints }, language} = props

  return css`
    ${base({ breakpoints })}
    ${dynamic(language)}
  `
}
