import { css } from '@emotion/react'

import calcRem from '../../../../utils/style/calcRem'

const common = css`
  & {
    width: ${calcRem(6)};
    height: ${calcRem(12)};
    border: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;

    &._disabled {
      pointer-events: none;
    }
  }
`

export { common }
export default css`
  ${common}

  & {
    background-image: url(${require('../../../../public/components/pagination/leftArrow.svg').default});
  }

  &._disabled {
    background-image: url(${require('../../../../public/components/pagination/leftArrow_disabled.svg').default});
  }
`
