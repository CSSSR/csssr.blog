import { getSources } from '@csssr/csssr.images/dist/utils'

const allImages = require.context('../../../../../public/components/paragraphWithImage')

const allImagesContext = allImages.keys().reduce((acc, key) => {
  const {
    groups: { imageName },
  } = key.match(/^\.\/(?<imageName>.+?)\/.+/)

  if (!acc[imageName]) {
    acc[imageName] = []
  }
  acc[imageName].push(allImages(key))

  return acc
}, {})

export default Object.keys(allImagesContext).reduce((acc, item) => {
  acc[item] = getSources(allImagesContext[item])
  return acc
}, {})
