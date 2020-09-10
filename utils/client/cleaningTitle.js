export default (title, option) => {
  let cleanTitle = title.replace(/<\/?i>|<\/?br\/?>/g, '')

  if (option === 'meta') {
    return cleanTitle.replace(/&nbsp;/g, ' ')
  }

  return cleanTitle
}
