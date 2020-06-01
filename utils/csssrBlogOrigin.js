const { isDevelopment } = require('./app-environment')

module.exports = (() => {
  if (process.env.CSSSR_BLOG_ORIGIN) {
    return process.env.CSSSR_BLOG_ORIGIN
  } else if (isDevelopment) {
    return 'http://localhost:3030'
  }
  return 'https://csssr.space'
})()
