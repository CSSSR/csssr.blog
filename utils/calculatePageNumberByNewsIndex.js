import { NEWS_PER_PAGE } from '../data/constants'

export default (index) => {
  const newsNumber = index + 1

  return Math.ceil(newsNumber / NEWS_PER_PAGE).toString()
}
