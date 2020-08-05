import { POSTS_PER_PAGE } from '../data/constants'

export default (index) => (index > 0 ? Math.ceil(index / POSTS_PER_PAGE) : 1).toString()
