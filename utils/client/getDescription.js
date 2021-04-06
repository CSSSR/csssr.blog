import cleaningTitle from './cleaningTitle'

export default (isNews, post) => {
  if (post?.description) {
    return post?.description
  }

  if (isNews) {
    return cleaningTitle(post.title, 'meta')
  }

  const { content } = post

  return (
    content
      .slice(content.indexOf('**'), content.indexOf('\n', content.indexOf('**')))
      .replace('\n', '')
      .replace(/\**/g, '')
      .replace(/&nbsp;/g, ' ')
      // eslint-disable-next-line no-irregular-whitespace
      .replace(/ /g, ' ')
      .replace(/<.*?>/g, '')
      .replace(/\[|\]\(https?:\/\/?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?\)/g, '')
      .replace(/\s{2,}/g, ' ')
  )
}
