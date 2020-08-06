import { POSTS_PER_PAGE } from '../data/constants'

export default (index) => {
  const postNumber = index + 1

  return Math.ceil(postNumber / POSTS_PER_PAGE).toString()
}
