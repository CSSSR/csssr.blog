import { Text } from '@csssr/core-design'
import styled from '@emotion/styled'
import cn from 'classnames'
import { node, string } from 'prop-types'

import styles from './Note.styles'

const Note = (props) => {
  const { children, className, isQuoteLike } = props

  if (children && children.length === 1) {
    return (
      <Text as="section" className={cn(className, { is_quote_like: isQuoteLike })}>
        {children}
      </Text>
    )
  }

  return <section className={cn(className, { is_quote_like: isQuoteLike })}>{children}</section>
}

Note.propTypes = {
  className: string,
  children: node,
}

export default styled(Note)`
  ${styles}
`
