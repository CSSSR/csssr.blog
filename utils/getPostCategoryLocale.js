import categories from '../data/categories'

export default (tag, language) => categories.filter((item) => item.id === tag)[0].title[language]
