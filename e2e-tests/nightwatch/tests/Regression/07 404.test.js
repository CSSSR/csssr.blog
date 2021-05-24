const pages = require("../data/pages")
const page404 = require("../pageObject/page404")

testcase('Page 404 (RU)', () => {
  step('Go to the home page', () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
  })

  step('Add "qwe12" to the url', () => {
    browser.url(`${browser.launch_url}${pages.ruLocal.url}/qwe123`)
  })

  expected('A stylized 404 page is displayed', () => {
    browser
      .waitForElementPresent(page404.block.main)
      .assert.screenshotElement(
        page404.block.page404,
        '404 (RU)', { hideSelectors: [page404.block.postsList]}
      )
  })
})

testcase('Display links (RU)', () => {
  step('Go to page 404', () => {
    browser.url(`${browser.launch_url}${pages.ruLocal.url}/qwe123`)
  })

  expected('The page displays links to sections from the header part', () => {
    if (browser.options.desiredCapabilities.browserName === 'safari') {
      browser
        .assert.containsText(page404.link.all, 'Все статьи')
        .assert.containsText(page404.link.management, 'Менеджмент')
        .assert.containsText(page404.link.development, 'Разработка')
        .assert.containsText(page404.link.culture, 'Культура')
        .assert.containsText(page404.link.news, '🔥 Новости')
    }
    else {
      browser
        .assert.containsText(page404.link.all, 'ВСЕ СТАТЬИ')
        .assert.containsText(page404.link.management, 'МЕНЕДЖМЕНТ')
        .assert.containsText(page404.link.development, 'РАЗРАБОТКА')
        .assert.containsText(page404.link.culture, 'КУЛЬТУРА')
        .assert.containsText(page404.link.news, 'НОВОСТИ')
    }
  })
})

testcase('Go to page «ВСЕ СТАТЬИ»', () => {
  step('Go to page 404', () => {
    browser.url(`${browser.launch_url}${pages.ruLocal.url}/qwe123`)
  })

  step('Click on the text link «ВСЕ СТАТЬИ»', () => {
    browser.click(page404.link.all)
  })

  expected('Go to home page', () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}/`)
  })
})

testcase('Go to page «МЕНЕДЖМЕНТ»', () => {
  step('Go to page 404', () => {
    browser.url(`${browser.launch_url}${pages.ruLocal.url}/qwe123`)
  })

  step('Click on the text link «МЕНЕДЖМЕНТ»', () => {
    browser.click(page404.link.management)
  })

  expected('Go to page МЕНЕДЖМЕНТ', () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.management.url}`)
  })
})

testcase('Go to page «РАЗРАБОТКА»', () => {
  step('Go to page 404', () => {
    browser.url(`${browser.launch_url}${pages.ruLocal.url}/qwe123`)
  })

  step('Click on the text link «РАЗРАБОТКА»', () => {
    browser.click(page404.link.development)
  })

  expected('Go to page РАЗРАБОТКА', () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.webDevelopment.url}`)
  })
})

testcase('Go to page «КУЛЬТУРА»', () => {
  step('Go to page 404', () => {
    browser.url(`${browser.launch_url}${pages.ruLocal.url}/qwe123`)
  })

  step('Click on the text link «КУЛЬТУРА»', () => {
    browser.click(page404.link.culture)
  })

  expected('Go to page КУЛЬТУРА', () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.culture.url}`)
  })
})

testcase('Go to page «НОВОСТИ»', () => {
  step('Go to page 404', () => {
    browser.url(`${browser.launch_url}${pages.ruLocal.url}/qwe123`)
  })

  step('Click on the text link «НОВОСТИ»', () => {
    browser.click(page404.link.news)
  })

  expected('Go to page НОВОСТИ', () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.news512.url}`)
  })
})

testcase('Page 404 (EN)', () => {
  step('Go to the home page', () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .setWindowSize(1920,1080)
  })

  step('Add "qwe12" to the url', () => {
    browser.url(`${browser.launch_url}${pages.enLocal.url}/qwe123`)
  })

  expected('A stylized 404 page is displayed', () => {
    browser
      .waitForElementPresent(page404.block.main)
      .assert.screenshotElement(
        page404.block.page404,
        '404 (EN)', { hideSelectors: [page404.block.postsList]}
      )
  })
})

testcase('Display links (EN)', () => {
  step('Go to page 404', () => {
    browser.url(`${browser.launch_url}${pages.enLocal.url}/qwe123`)
  })

  expected('The page displays links to sections from the header part', () => {
    if (browser.options.desiredCapabilities.browserName === 'safari') {
      browser
        .assert.containsText(page404.link.all, 'All')
        .assert.containsText(page404.link.business, 'Business')
        .assert.containsText(page404.link.management, 'Management')
        .assert.containsText(page404.link.development, 'Web development')
    }
    else {
      browser
        .assert.containsText(page404.link.all, 'ALL')
        .assert.containsText(page404.link.business, 'BUSINESS')
        .assert.containsText(page404.link.management, 'MANAGEMENT')
        .assert.containsText(page404.link.development, 'WEB DEVELOPMENT')
    }
  })
})

testcase('Go to page «ALL»', () => {
  step('Go to page 404', () => {
    browser.url(`${browser.launch_url}${pages.enLocal.url}/qwe123`)
  })

  step('Click on the text link «ALL»', () => {
    browser.click(page404.link.all)
  })

  expected('Go to home page', () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}/`)
  })
})

testcase('Go to page «BUSINESS»', () => {
  step('Go to page 404', () => {
    browser.url(`${browser.launch_url}${pages.enLocal.url}/qwe123`)
  })

  step('Click on the text link «BUSINESS»', () => {
    browser.click(page404.link.business)
  })

  expected('Go to page BUSINESS', () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.business.url}`)
  })
})

testcase('Go to page «MANAGEMENT»', () => {
  step('Go to page 404', () => {
    browser.url(`${browser.launch_url}${pages.enLocal.url}/qwe123`)
  })

  step('Click on the text link «MANAGEMENT»', () => {
    browser.click(page404.link.management)
  })

  expected('Go to page MANAGEMENT', () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.management.url}`)
  })
})

testcase('Go to page «WEB DEVELOPMENT»', () => {
  step('Go to page 404', () => {
    browser.url(`${browser.launch_url}${pages.enLocal.url}/qwe123`)
  })

  step('Click on the text link «WEB DEVELOPMENT»', () => {
    browser.click(page404.link.development)
  })

  expected('Go to page WEB DEVELOPMENT', () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.webDevelopment.url}`)
  })
})
