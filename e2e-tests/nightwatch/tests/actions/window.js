function checkUrlInNewWindow(url) {
  browser.windowHandles(function (result) {
    var handleOne = result.value[0]
    var handleTwo = result.value[result.value.length - 1]
    var handleNew = result.value[1]
    if (browser.options.desiredCapabilities.browserName === 'chrome') {
      browser.switchWindow(handleTwo)
      browser.assert.urlEquals(url)
      browser.switchWindow(handleOne)
    }
    if (browser.options.desiredCapabilities.browserName === 'firefox') {
      browser.switchWindow(handleNew)
      browser.assert.urlEquals(url)
      browser.switchWindow(handleOne)
    }
  })
}

module.exports = { checkUrlInNewWindow }
