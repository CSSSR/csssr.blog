import { Text } from '@csssr/core-design'
import styled from '@emotion/styled'
import { node, string } from 'prop-types'

import styles from './Note.styles'

const Note = ({ children, className }) => {
  const isOneChildren = children?.length === 1
  const Inner = isOneChildren ? Text : 'div'

  return (
    <div className={className}>
      <Inner className="inner">{children}</Inner>
    </div>
  )
}

Note.propTypes = {
  className: string,
  children: node,
}

export default styled(Note)`
  ${styles}
`
