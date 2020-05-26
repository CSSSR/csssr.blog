import styled from '@emotion/styled'
import { Text } from '@csssr/core-design'
import styles from './Note.styles'

const Note = ({ children, className }) => {
  if (children.length === 1)
    return (
      <Text as="section" className={className}>
        {children}
      </Text>
    )
  return <section className={className}>{children}</section>
}

export default styled(Note)`
  ${styles}
`
