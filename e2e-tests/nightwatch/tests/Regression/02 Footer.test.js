const pages = require('../data/pages')
const footer = require('../pageObject/footer.js')
const header = require('../pageObject/header.js')
const { checkUrlInNewWindow } = require('../actions/window')
const ANIMATION_DURATION_IN_MS = 800

testcase('Zooming pins on the map when hovering over the address (RU desktop)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  step('hover over any address in the footer', () => {
    browser
      .setWindowSize(1920, 4000)
      .moveToElement(footer.link.estonia, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('the pin on the card on the right has increased', () => {
    browser.assert.screenshotElement(footer.block.map, 'ru map(enlarged Estonian pin)')
  })
})

testcase('Clickable e-mail under the logo (attribute check) (RU desktop)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  expected('for launch@csssr.com the correct link to open the email client', () => {
    browser.getAttribute(footer.link.email, 'href', function (result) {
      if (result.value !== 'mailto:launch@csssr.com') {
        throw new Error(`Incorrect link for email in the footer( ${result.value} )`)
      }
    })
  })
})

testcase('Clickable phones(attribute check) (RU desktop)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
      .setWindowSize(1920, 4000)
  })

  expected('the correct link for Singapore to open the app to call', () => {
    browser.getAttribute(footer.link.telSingapore, 'href', function (result) {
      if (result.value !== 'tel:+65 3159 4531') {
        throw new Error(`Incorrect phone number in the footer( ${result.value} )`)
      }
    })
  })

  expected('the correct links for Russia to open the app to call', () => {
    browser.getAttribute(footer.link.telRussia, 'href', function (result) {
      if (result.value !== 'tel:+7 (499) 113-16-17') {
        throw new Error(`Incorrect phone number in the footer( ${result.value} )`)
      }
    })

    browser.getAttribute(footer.link.telRussiaTwo, 'href', function (result) {
      if (result.value !== 'tel:+7 (499) 113-16-17') {
        throw new Error(`Incorrect phone number in the footer( ${result.value} )`)
      }
    })
  })
})

testcase('Switching the Language (RU desktop)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
      .setWindowSize(1920, 4000)
  })

  step('click EN switch button', () => {
    browser.click(footer.link.changeLocal)
  })

  expected('go to EN locale page', () => {
    browser
      .waitForElementPresent(header.link.solutions)
      .assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}`)
  })

  expected('on the button to change the language the letters RU are displayed', () => {
    browser.assert.containsText(
      footer.link.changeLocal,
      'RU'
    )
  })
})

testcase('Display contact information in the footer (RU desktop)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  step('scrolling to the footer', () => {
    browser
      .moveToElement(footer.link.changeLocal, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .setWindowSize(1920, 4000)
  })

  expected('office contact information is displayed in the footer', () => {
    browser
      .assert.containsText(
        footer.text.singaporeAddress,
        '68 Circular Road,\n#02-01,\nSingapore, 049422'
      )
      .assert.containsText(
        footer.text.russianAddress,
        `22 Большой Козихинский пер.,\nстр. 2, офис 28,\nг. Москва, 123001,\nРоссия`
      )
      .assert.containsText(
        footer.text.russianAddressTwo,
        `30 Лесная ул.,\nстр. 1, офис 303,\nг. Дзержинский, 140090,\nРоссия`
      )
      .assert.containsText(
        footer.text.estoniaAddress,
        '26 Majaka St.,\nbld.1, office 14,\nTallinn, 11412,\nEstonia'
      )
      .assert.containsText(
        footer.link.telSingapore,
        `+65 3159 4531`
      )
      .assert.containsText(
        footer.link.telRussia,
        `+7 (499) 113-16-17`
      )
      .assert.containsText(
        footer.link.telRussiaTwo,
        '+7 (499) 113-16-17'
      )
  })
})

testcase('Displaying social network icons in the footer (RU desktop)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .setWindowSize(1920, 4000)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  expected('in the footer the icon Facebook', () => {
    browser
      .waitForElementPresent(footer.icon.facebook)
  })

  expected('in the footer the icon LinkdIn', () => {
    browser
      .waitForElementPresent(footer.icon.linkdIn)
  })

  expected('in the footer the icon Instagram', () => {
    browser
      .waitForElementPresent(footer.icon.instagram)
  })

  expected('in the footer the icon YouTube', () => {
    browser
      .waitForElementPresent(footer.icon.youTube)
  })

  expected('in the footer the icon Sound Cloud', () => {
    browser
      .waitForElementPresent(footer.icon.soundcloud)
  })

  expected('in the footer the icon Telegram', () => {
    browser
      .waitForElementPresent(footer.icon.telegram)
  })

  expected('in the footer the icon Twitter', () => {
    browser
      .waitForElementPresent(footer.icon.twitter)
  })

  expected('in the footer the icon VK', () => {
    browser
      .waitForElementPresent(footer.icon.vk)
  })
})

testcase('Displaying links (RU desktop)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .setWindowSize(1920, 4000)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  expected('the footer displays the correct links', () => {
    browser
      .assert.containsText(
        footer.link.outsourcing,
        'Aутсорсинг'
      )
      .assert.containsText(
        footer.link.mvp,
        'MVP'
      )
      .assert.containsText(
        footer.link.backendAndDevops,
        'Бэкенд\nи DevOps'
      )
      .assert.containsText(
        footer.link.fintech,
        'Финтех'
      )
      .assert.containsText(
        footer.link.informationTechnology,
        'ИТ компании'
      )
      .assert.containsText(
        footer.link.ecommerce,
        'Электронная\nкоммерция'
      )
      .assert.containsText(
        footer.link.mediAndMarketing,
        'Медиа и маркетинг'
      )
      .assert.containsText(
        footer.link.techStack,
        'Технологии'
      )
      .assert.containsText(
        footer.link.wayOfWork,
        'Процессы'
      )
      .assert.containsText(
        footer.link.coreValues,
        'Ценности'
      )
      .assert.containsText(
        footer.link.jobs,
        'Вакансии'
      )
      .assert.containsText(
        footer.link.blog,
        'Блог'
      )
      .assert.containsText(
        footer.link.contacts,
        'Контакты'
      )
      .assert.containsText(
        footer.link.projects,
        'Наши проекты'
      )
  })
})

testcase('Clicking on links (RU desktop)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .setWindowSize(1920, 4000)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  step('click on the text link «Аутсорсинг»', () => {
    browser.click(footer.link.outsourcing)
  })

  expected('the transition to the page triggered «Аутсорсинг веб-разработки»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.outsourcingFrontEnd.url}`)
  })

  step('click on the text link «MVP»', () => {
    browser.click(footer.link.mvp)
  })

  expected('the transition to the page triggered «MVP Разработка»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.mvpDevelopment.url}`)
  })

  step('click on the text link «Бэкенд и DevOps»', () => {
    browser.click(footer.link.backendAndDevops)
  })

  expected('the transition to the page triggered «Бэкенд и DevOps»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.backEndAndDevops.url}`)
  })

  step('click on the text link «Финтех»', () => {
    browser.click(footer.link.fintech)
  })

  expected('the transition to the page triggered «Финтех»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.fintech.url}`)
  })

  step('click on the text link «ИТ компании»', () => {
    browser.click(footer.link.informationTechnology)
  })

  expected('the transition to the page triggered «ИТ компании»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.information.url}`)
  })

  step('click on the text link «Электронная коммерция»', () => {
    browser.click(footer.link.ecommerce)
  })

  expected('the transition to the page triggered «Электронная коммерция»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.eCommerce.url}`)
  })

  step('click on the text link «Медиа и Маркетинг»', () => {
    browser.click(footer.link.mediAndMarketing)
  })

  expected('the transition to the page triggered «Медиа и Маркетинг»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.mediaAndMarketing.url}`)
  })

  step('click on the text link «Технологии»', () => {
    browser.click(footer.link.techStack)
  })

  expected('the transition to the page triggered «Технологии»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.techStack.url}`)
  })

  step('click on the text link «Процессы»', () => {
    browser.click(footer.link.wayOfWork)
  })

  expected('the transition to the page triggered «Процессы»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.wayOfWork.url}`)
  })

  step('click on the text link «Ценности»', () => {
    browser.click(footer.link.coreValues)
  })

  expected('the transition to the page triggered «Ценности»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.core.url}`)
  })

  step('click on the text link «Вакансии»', () => {
    browser.click(footer.link.jobs)
  })

  expected('the transition to the page triggered «Вакансии»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.careers.url}`)
  })

  step('click on the text link «Контакты»', () => {
    browser.click(footer.link.contacts)
  })

  expected('the transition to the page triggered «Контакты»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.contacts.url}`)
  })
})

testcase('Zooming pins on the map when hovering over the address (EN desktop)', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  step('hover over any address in the footer', () => {
    browser
      .setWindowSize(1920, 4000)
      .moveToElement(footer.link.estonia, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('the pin on the card on the right has increased', () => {
    browser.assert.screenshotElement(footer.block.map, 'en map(enlarged Estonian pin)')
  })
})

testcase('Clickable e-mail under the logo (attribute check) (EN desktop)', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  expected('for launch@csssr.com the correct link to open the email client', () => {
    browser.getAttribute(footer.link.email, 'href', function (result) {
      if (result.value !== 'mailto:launch@csssr.com') {
        throw new Error(`Incorrect link for email in the footer( ${result.value} )`)
      }
    })
  })
})

testcase('Clickable phones(attribute check) (EN desktop)', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
      .setWindowSize(1920, 4000)
  })

  expected('the correct link for Singapore to open the app to call', () => {
    browser.getAttribute(footer.link.telSingapore, 'href', function (result) {
      if (result.value !== 'tel:+65 3159 4531') {
        throw new Error(`Incorrect phone number in the footer( ${result.value} )`)
      }
    })
  })

  expected('the correct links for Russia to open the app to call', () => {
    browser.getAttribute(footer.link.telRussia, 'href', function (result) {
      if (result.value !== 'tel:+7 (499) 113-16-17') {
        throw new Error(`Incorrect phone number in the footer( ${result.value} )`)
      }
    })

    browser.getAttribute(footer.link.telRussiaTwo, 'href', function (result) {
      if (result.value !== 'tel:+7 (499) 113-16-17') {
        throw new Error(`Incorrect phone number in the footer( ${result.value} )`)
      }
    })
  })
})

testcase('Switching the Language (EN desktop)', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .setWindowSize(1920, 4000)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  step('click RU switch button', () => {
    browser.click(footer.link.changeLocal)
  })

  expected('go to RU locale page', () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}`)
  })

  expected('on the button to change the language the letters EN are displayed', () => {
    browser.assert.containsText(
      footer.link.changeLocal,
      'EN'
    )
  })
})

testcase('Display contact information in the footer (EN desktop)', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  step('scrolling to the footer', () => {
    browser
      .moveToElement(footer.link.changeLocal, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .setWindowSize(1920, 4000)
  })

  expected('office contact information is displayed in the footer', () => {
    browser
      .assert.containsText(
        footer.text.singaporeAddress,
        '68 Circular Road,\n#02-01,\nSingapore, 049422'
      )
      .assert.containsText(
        footer.text.russianAddress,
        `22 Bol'shoj Kozihinskij Lane,\nbld. 2, office 28,\nMoscow, 123001,\nRussia`
      )
      .assert.containsText(
        footer.text.russianAddressTwo,
        `30 Lesnaya St.,\nbld. 1, office 303,\nDzerzhinsky, 140090,\nRussia`
      )
      .assert.containsText(
        footer.text.estoniaAddress,
        '26 Majaka St.,\nbld.1, office 14,\nTallinn, 11412,\nEstonia'
      )
      .assert.containsText(
        footer.link.telSingapore,
        `+65 3159 4531`
      )
      .assert.containsText(
        footer.link.telRussia,
        `+7 (499) 113-16-17`
      )
      .assert.containsText(
        footer.link.telRussiaTwo,
        '+7 (499) 113-16-17'
      )
  })
})

testcase('Displaying social network icons in the footer (EN desktop)', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .setWindowSize(1920, 4000)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  expected('in the footer the icon Facebook', () => {
    browser
      .waitForElementPresent(footer.icon.facebook)
  })

  expected('in the footer the icon LinkdIn', () => {
    browser
      .waitForElementPresent(footer.icon.linkdIn)
  })

  expected('in the footer the icon Instagram', () => {
    browser
      .waitForElementPresent(footer.icon.instagram)
  })

  expected('in the footer the icon YouTube', () => {
    browser
      .waitForElementPresent(footer.icon.youTube)
  })
})

testcase('Displaying links (EN desktop)', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .setWindowSize(1920, 4000)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  expected('the footer displays the correct links', () => {
    browser
      .assert.containsText(
        footer.link.outsourcing,
        'Outsourcing'
      )
      .assert.containsText(
        footer.link.mvp,
        'MVP'
      )
      .assert.containsText(
        footer.link.backendAndDevops,
        'Back-end\nand DevOps'
      )
      .assert.containsText(
        footer.link.fintech,
        'Fintech'
      )
      .assert.containsText(
        footer.link.informationTechnology,
        'IT companies'
      )
      .assert.containsText(
        footer.link.ecommerce,
        'E-Commerce'
      )
      .assert.containsText(
        footer.link.mediAndMarketing,
        'Media and marketing'
      )
      .assert.containsText(
        footer.link.techStack,
        'Technologies'
      )
      .assert.containsText(
        footer.link.wayOfWork,
        'Process'
      )
      .assert.containsText(
        footer.link.coreValues,
        'Core values'
      )
      .assert.containsText(
        footer.link.ourProjects,
        'Our projects'
      )
      .assert.containsText(
        footer.link.LMS,
        'Modular LMS system'
      )
      .assert.containsText(
        footer.link.trackingSoftware,
        'Time-tracking software'
      )
      .assert.containsText(
        footer.link.jobsEn,
        'Careers'
      )
      .assert.containsText(
        footer.link.blogEn,
        'Blog'
      )
      .assert.containsText(
        footer.link.contactsEN,
        'Contact us'
      )
  })
})

testcase('Clicking on links (EN desktop)', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .setWindowSize(1920, 4000)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  step('click on the text link «Outsourcing»', () => {
    browser.click(footer.link.outsourcing)
  })

  expected('the transition to the page triggered «Web Development Outsourcing»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.outsourcingFrontEnd.url}`)
  })

  step('click on the text link «MVP»', () => {
    browser.click(footer.link.mvp)
  })

  expected('the transition to the page triggered «CSSSR MVP Development»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.mvpDevelopment.url}`)
  })

  step('click on the text link «Back-end and DevOps»', () => {
    browser.click(footer.link.backendAndDevops)
  })

  expected('the transition to the page triggered «Back-end and DevOps»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.backEndAndDevops.url}`)
  })

  step('click on the text link «Fintech»', () => {
    browser.click(footer.link.fintech)
  })

  expected('the transition to the page triggered «Fintech»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.fintech.url}`)
  })

  step('click on the text link «IT companies»', () => {
    browser.click(footer.link.informationTechnology)
  })

  expected('the transition to the page triggered «IT companies»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.information.url}`)
  })

  step('click on the text link «E-Commerce»', () => {
    browser.click(footer.link.ecommerce)
  })

  expected('the transition to the page triggered «E-Commerce»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.eCommerce.url}`)
  })

  step('click on the text link «Media and marketing»', () => {
    browser.click(footer.link.mediAndMarketing)
  })

  expected('the transition to the page triggered «Media and marketing»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.mediaAndMarketing.url}`)
  })

  step('click on the text link «Technologies»', () => {
    browser.click(footer.link.techStack)
  })

  expected('the transition to the page triggered «CSSSR Technologies»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.techStack.url}`)
  })

  step('click on the text link «Process»', () => {
    browser.click(footer.link.wayOfWork)
  })

  expected('the transition to the page triggered «Process»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.wayOfWork.url}`)
  })

  step('click on the text link «Core values»', () => {
    browser.click(footer.link.coreValues)
  })

  expected('the transition to the page triggered «CSSSR Core values»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.core.url}`)
  })

  step('click on the text link «Our projects»', () => {
    browser.click(footer.link.ourProjects)
  })

  expected('the transition to the page triggered «Our projects»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.ourProjects.url}`)
  })

  step('click on the text link «Modular LMS system»', () => {
    browser.click(footer.link.LMS)
  })

  expected('the transition to the page triggered «Modular LMS system»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.lms.url}`)
  })

  step('click on the text link «Time-tracking software»', () => {
    browser.click(footer.link.trackingSoftware)
  })

  expected('the transition to the page triggered «Time-tracking software»', () => {
    checkUrlInNewWindow(`${pages.traker.url}`)
  })

  step('click on the text link «Careers»', () => {
    browser.click(footer.link.jobsEn)
  })

  expected('the transition to the page triggered «Careers»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.careersEn.url}`)
  })

  step('click on the text link «Contact us»', () => {
    browser.click(footer.link.contactsEN)
  })

  expected('the transition to the page triggered «Contact us»', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.contacts.url}`)
  })
})
