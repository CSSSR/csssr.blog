import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import styles from './BenchmarkEmail.styles'

const BenchmarkEmail = () => (
  <>
    <Global styles={styles} />
  </>
)

export default styled(BenchmarkEmail)`
  ${styles}
`
