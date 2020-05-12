import { Heading } from '@csssr/core-design'

export default function PostTitle({ children }) {
  return (
    <Heading type="regular" size="l">
      {children}
    </Heading>
  )
}
