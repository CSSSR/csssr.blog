import { POSTS_PER_PAGE } from '../data/constants'

export default (index) => {
  const postNumber = index + 1

  return (postNumber > POSTS_PER_PAGE ? Math.ceil(postNumber / POSTS_PER_PAGE) : 1).toString()
}
