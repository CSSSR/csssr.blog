import styled from '@emotion/styled'

import { Grid } from '../../components/Grid'
import styles from '../../components/Post/Body/Body.styles'

const PostWrap = ({ className, children }) => {
  return <Grid className={className}>{children}</Grid>
}

export default styled(PostWrap)`
  ${styles}
`
