import { getOriginal } from '@csssr/csssr.images/dist/utils'

const getOgImage = (ogImage) =>
  `https://images.csssr.com/insecure/resize:fit:1200:630/extend:true:ce:0:0/plain/${
    process.env.BLOG_HOST
  }${getOriginal(ogImage)}`

export { getOgImage as default }
