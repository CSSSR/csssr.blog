export const getStringAttributes = (args) =>
  Object.keys(args).reduce((acc, item) => {
    acc += `${item}="${args[item]}" `
    return acc
  }, '')
