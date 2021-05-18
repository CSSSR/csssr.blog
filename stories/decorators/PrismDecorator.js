import Prism from 'prismjs'
import { useEffect } from 'react'
import '../../public/prism-themes/prism-material-light.css'

export const PrismDecorator = (Story) => {
  useEffect(() => {
    Prism.highlightAll()
  })

  return <Story />
}
