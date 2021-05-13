import { string, node } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import { Text } from '@csssr/core-design'
import styles from './Note.styles'

const Note = (props) => {
  const { children, className } = props

  if (children && children.length === 1) {
    return (
      <Text as="section" className={cn(className)}>
        {children}
      </Text>
    )
  }

  return <section className={cn(className)}>{children}</section>
}

Note.propTypes = {
  className: string,
  children: node,
}

export default styled(Note)`
  ${styles}
`
