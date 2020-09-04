export default (title) => title.replace(/<\/?i>|<\/?br\/?>/g, '').replace(/&nbsp;/g, ' ')
