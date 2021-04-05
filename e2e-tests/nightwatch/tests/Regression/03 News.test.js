const pages = require('../data/pages')
const footer = require('../pageObject/footer.js')
const general = require('../pageObject/general')
const header = require('../pageObject/header.js')
const news = require('../pageObject/news.js')

testcase('The «`fire` Новости» category is displayed(only FireFox)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .setWindowSize(1920, 4000)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(general.button.closeCookiesAlert)
  })

  expected('the item «`fire` Новости» is displayed', () => {
    browser
      .waitForElementVisible(header.link.news)
      .assert.screenshotElement(header.link.news, 'fire icon news')
  })

  step('click EN switch button', () => {
    browser.click(footer.link.changeLocal)
  })

  expected('go to EN locale page', () => {
    browser
      .waitForElementPresent(header.link.solutions)
      .assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}`)
  })

  expected('the «`fire` Новости» item is missing in the EN version', () => {
    browser
      .waitForElementNotPresent(header.link.news)
      .assert.screenshotElement(header.block.submenu, 'en submenu')
  })
})

testcase('News page', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(general.button.closeCookiesAlert)
  })

  step('click on «`fire` Новости»', () => {
    browser.click(header.link.news)
  })

  expected(`the list page of all news has been opened ${pages.news512.url}`, () => {
    browser
      .assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.news512.url}`)
      .assert.containsText(news.text.title, 'Новости 512')
  })

  expected('a list of news items is displayed', () => {
    let fistNewsNumber
    let secondNewsNumber
    browser
      .waitForElementPresent(news.block.newsList)
      .getText('css selector', news.text.numberFistNews, function (result) {
        fistNewsNumber = Number(result.value.split('#')[1])
      })
      .getText('css selector', news.text.numberSecondNews, function (result) {
        secondNewsNumber = Number(result.value.split('#')[1])
      })
      .perform(function () {
        if (secondNewsNumber !== fistNewsNumber - 1) {
          throw new Error('news order is broken')
        }
      })
  })

  expected('first news item has a larger font size than the others', () => {
    browser.getCssProperty(news.text.numberFistNews, 'font-size', function (result) {
      if (result.value !== '32px') {
        throw new Error('incorrect font size')
      }
    })
    browser.getCssProperty(news.text.numberSecondNews, 'font-size', function (result) {
      if (result.value !== '24px') {
        throw new Error('incorrect font siz')
      }
    })
  })
})

testcase('Pagination on the news page', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .setWindowSize(1920, 4000)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(general.button.closeCookiesAlert)
  })

  step('click on «`fire` Новости»', () => {
    browser
      .click(header.link.news)
      .assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.news512.url}`)
      .assert.containsText(news.text.title, 'Новости 512')
  })

  expected('twelve articles are displayed on the page', () => {
    browser
      .waitForElementVisible(news.block.lastNews)
      .waitForElementNotPresent(news.block.nonexistingNews)
  })

  expected('pagination is displayed', () => {
    browser
      .waitForElementPresent(news.block.pagination)
      .assert.screenshotElement(news.block.pagination, 'pagination the first page is selected')
  })

  step('click on the number of the second page', () => {
    browser.click(news.link.numberOfPage)
  })

  expected('go to the second page of the news list', () => {
    browser
      .assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.news512.url}${pages.pageToo.url}`)
      .assert.screenshotElement(news.block.pagination, 'pagination the second page is selected')
  })
})

testcase('The specific news page', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .setWindowSize(1920, 4700)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(general.button.closeCookiesAlert)
  })

  step(`go to the news page`, () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.news512.url}${pages.news145.url}`)
      .waitForElementVisible(header.block.header)
  })

  expected('the full page of the news is displayed correctly', () => {
    browser.assert.screenshotElement(news.block.fullPage, 'full news page')
  })
})

testcase('Go to the soundcloud page ', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .setWindowSize(1920, 5500)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(general.button.closeCookiesAlert)
  })

  step(`go to the news page`, () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.news512.url}${pages.news145.url}`)
      .waitForElementVisible(header.block.header)
  })

  step(`click on the «track» block`, () => {
    browser.click(news.block.audio)
  })

  expected('a new tab opened the audio version of the article on soundcloud', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })
    browser.assert.urlEquals(pages.audio.url)
  })
})

