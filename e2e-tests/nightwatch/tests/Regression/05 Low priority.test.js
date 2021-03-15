const news = require("../pageObject/news")
const pages = require('../data/pages')
const header = require('../pageObject/header.js')
const footer = require("../pageObject/footer")

testcase('The «with receiver» card is displayed on the main blog(RU local)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  expected('the «with receiver» card is displayed', () => {
    browser.waitForElementPresent(news.block.radio)
  })
})

testcase('Displaying pagination(RU local)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .setWindowSize(1920, 3800)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  expected('paginator is displayed', () => {
    browser
      .waitForElementPresent(news.block.pagination)
      .assert.screenshotElement(news.block.pagination, 'pagination')
  })
})

testcase('Go from the main page to the «Privacy Policy» page (RU local)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .setWindowSize(1920, 3800)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  step(`click on «Privacy Policy»`, () => {
    browser.click(footer.link.privacyPolicy)
  })

  expected('the "Privacy Policy" page opened in the same tab', () => {
    browser.assert.urlEquals(`${pages.com.url}${pages.ruLocal.url}${pages.privacyPolicy.url}`)
  })
})

testcase('Go from the main page to the «Privacy Policy» page (EN local)', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .setWindowSize(1920, 3800)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  step(`click on «Privacy Policy»`, () => {
    browser.click(footer.link.privacyPolicy)
  })

  expected('the "Privacy Policy" page opened in the same tab', () => {
    browser.assert.urlEquals(`${pages.com.url}${pages.enLocal.url}${pages.privacyPolicy.url}`)
  })
})
