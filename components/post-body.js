import styled from '@emotion/styled'
import styles from './post-body.styles'

const PostBody = ({ content, className }) => {
  return (
    <div className={className}>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default styled(PostBody)`
  ${styles}
`
