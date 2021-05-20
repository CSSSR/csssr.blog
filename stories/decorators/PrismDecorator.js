import Prism from 'prismjs'
import { Global } from '@emotion/react'
import { useEffect } from 'react'
import { prismMaterialLight } from '../../components/Post/Body/Body.styles'

export const PrismDecorator = (Story) => {
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <>
      <Global styles={prismMaterialLight} />
      <Story />
    </>
  )
}
