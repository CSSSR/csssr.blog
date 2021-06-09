import { css } from '@emotion/react'

import calcRem from '../../../utils/style/calcRem'

const base = () => css`
  & {
    display: flex;
    flex-direction: column;
    margin-top: ${calcRem(50)};
  }
`

const StyledPosts = () => {

  return css`
    ${base()}
  `
}

export default StyledPosts
