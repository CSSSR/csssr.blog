export default (content) =>
  content
    .slice(content.indexOf('**'), content.indexOf('\n', content.indexOf('**')))
    .replace('\n', '')
    .replace(/\**/g, '')
    .replace(/<\/?i>|<\/?br\/?>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/<\/?span>/g, '')
