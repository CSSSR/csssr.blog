import styled from '@emotion/styled'
import styles from './Note.styles'

const Note = ({children, className }) =>  {
  
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default styled(Note)`
  ${styles}
`



