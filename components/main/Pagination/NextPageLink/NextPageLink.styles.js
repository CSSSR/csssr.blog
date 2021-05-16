import { css } from '@emotion/react'

import { common } from '../PrevPageLink/PrevPageLink.styles'

export default css`
  ${common}

  & {
    background-image: url(${require('../../../../public/components/pagination/rightArrow.svg').default});
  }

  &._disabled {
    background-image: url(${require('../../../../public/components/pagination/rightArrow_disabled.svg').default});
  }
`
