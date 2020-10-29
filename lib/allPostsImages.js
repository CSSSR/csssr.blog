import { getSources } from '@csssr/csssr.images/dist/utils'

// TODO Вынести перечисление типов картинок куда-нибудь, например в csssr.images
const requireAllPostsImagesResize = require.context(
  '../public/images/resize',
  true,
  /(png|gif|jpeg|jpg)$/,
)

const requireAllPostsImagesDontResize = require.context(
  '../public/images/dont-resize?dont-resize',
  true,
  /(png|gif|jpeg|jpg)$/,
)

// Сначала require'им все картинки по одной и складываем в объект вида
// {
//   en: {
//     'my-post': {
//       'my-image': [imageVariant2, imageVariant1]
//     },
//   },
//   ru: {...}
// }
// Здесь массив с вариантами изображения не отсортирован,
// require.context в произвольном порядке выдаёт файлы

const allPostsImages = (imgagesContext) =>
  imgagesContext.keys().reduce((acc, key) => {
    const {
      groups: { language, slug, imageName },
    } = key.match(/^\.\/(?<language>.+?)\/(?<slug>.+?)\/(?<imageName>.+?)\/.+/)

    if (!(process.env.IS_PRODUCTION && slug === 'example')) {
      if (!acc[language]) {
        acc[language] = {}
      }

      if (!acc[language][slug]) {
        acc[language][slug] = {}
      }

      if (!acc[language][slug][imageName]) {
        acc[language][slug][imageName] = []
      }

      acc[language][slug][imageName].push(imgagesContext(key))
    }

    return getPostImagesSources(acc)
  }, {})

// Затем вызываем функцию getSources для полученных массивов с разными вариантами изображения
const getPostImagesSources = (postsImages) =>
  Object.keys(postsImages).reduce((memo1, language) => {
    memo1[language] = Object.keys(postsImages[language]).reduce((memo2, slug) => {
      memo2[slug] = Object.keys(postsImages[language][slug]).reduce((memo3, imageName) => {
        memo3[imageName] = getSources(postsImages[language][slug][imageName])

        return memo3
      }, {})

      return memo2
    }, {})

    return memo1
  }, {})

export const dataByLanguagePostAndImageResize = allPostsImages(requireAllPostsImagesResize)
export const dataByLanguagePostAndImageDontResize = allPostsImages(requireAllPostsImagesDontResize)
