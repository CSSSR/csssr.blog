export const getStringAttributes = (args) =>
  Object.keys(args)
    .reduce((acc, item) => {
      if (typeof args[item] === 'boolean') {
        if (args[item]) {
          return acc + `${item} `
        }

        return acc
      }

      return acc + `${item}="${args[item]}" `
    }, '')
    .trim()
