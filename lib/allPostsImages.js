import { getSources } from '@csssr/csssr.images/dist/utils'

// TODO Вынести перечисление типов картинок куда-нибудь, например в csssr.images
const requireAllPostsImages = require.context('../public/posts', true, /(png|gif|jpeg|jpg)$/)

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
const allPostsImages = requireAllPostsImages.keys().reduce((acc, key) => {
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

    acc[language][slug][imageName].push(requireAllPostsImages(key))
  }

  return acc
}, {})

// Затем вызываем функцию getSources для полученных массивов с разными вариантами изображения
export default Object.keys(allPostsImages).reduce((memo1, language) => {
  memo1[language] = Object.keys(allPostsImages[language]).reduce((memo2, slug) => {
    memo2[slug] = Object.keys(allPostsImages[language][slug]).reduce((memo3, imageName) => {
      memo3[imageName] = getSources(allPostsImages[language][slug][imageName])

      return memo3
    }, {})

    return memo2
  }, {})

  return memo1
}, {})
