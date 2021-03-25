const _ = require('lodash')

const NEWS512 = 'news512'
const POSTS_PER_PAGE = 8
const PAGES_WITH_NEWS = 3

module.exports = {
  addNewPost: (posts, newPost) => {
    const postsWithoutNews = [newPost, ...posts.flat().filter((post) => post !== NEWS512)]
    const postsWithNews = postsWithoutNews.flatMap((post, idx) => {
      const isPageWithNews = idx / (POSTS_PER_PAGE - 1) <= PAGES_WITH_NEWS - 1
      const isFirstItemOnPage = idx % (POSTS_PER_PAGE - 1) === 0
      const shouldShowNews = isPageWithNews && isFirstItemOnPage

      return shouldShowNews ? [post, NEWS512] : post
    })

    return _.chunk(postsWithNews, 2)
  },
}
