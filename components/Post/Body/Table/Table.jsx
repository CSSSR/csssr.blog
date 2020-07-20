import styled from '@emotion/styled'
import { string, node, bool, oneOf } from 'prop-types'
import cn from 'classnames'
import styles from './Table.styles'

const Table = ({ className, children, color, withBorders, ...props }) => (
  <div
    className={cn(className, {
      color_green: color === 'green',
      color_purple: color === 'purple',
      with_borders: withBorders,
    })}
  >
    <table {...props}>{children}</table>
  </div>
)

Table.propTypes = {
  className: string,
  children: node,
  withBorders: bool,
  color: oneOf(['green', 'purple']),
}

export default styled(Table)`
  ${styles}
`
