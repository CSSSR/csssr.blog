export default (content) =>
  content
    .slice(content.indexOf('**'), content.indexOf('\n', content.indexOf('**')))
    .replace('\n', '')
    .replace(/\**/g, '')
