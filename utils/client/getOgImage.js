import { getOriginal } from '@csssr/csssr.images/dist/utils'

const getOgImage = (ogImage) =>
  getOriginal(ogImage).replace(
    'https://images.csssr.com/insecure/plain/',
    'https://images.csssr.com/insecure/resize:fit:1200:630/extend:true:ce:0:0/plain/',
  )

export { getOgImage as default }
