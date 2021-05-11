export const getStringAttributes = (args) =>
  Object.keys(args)
    .reduce((acc, item) => {
      if (typeof args[item] === 'boolean') {
        if (args[item]) {
          acc += `${item} `
        }

        return acc
      }

      acc += `${item}="${args[item]}" `

      return acc
    }, '')
    .trim()
