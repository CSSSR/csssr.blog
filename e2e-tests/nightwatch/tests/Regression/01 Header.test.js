const pages = require('../data/pages')
const header = require('../pageObject/header.js')
const { checkUrlInNewWindow } = require('../actions/window')

testcase('Contents of the header for the RU locale', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  expected('the logo is displayed in the header', () => {
    browser
      .waitForElementVisible(header.logo.csssr)
  })

  expected('the link «‎Услуги» is displayed in the header‎', () => {
    browser
      .waitForElementVisible(header.link.services)
      .assert.containsText(header.link.services, 'УСЛУГИ')
  })

  expected('the link «Портфолио» is displayed in the header ‎', () => {
    browser
      .waitForElementVisible(header.link.portfolio)
      .assert.containsText(header.link.portfolio, 'ПОРТФОЛИО')
  })

  expected('the link «‎Как мы работаем» is displayed in the header‎', () => {
    browser
      .waitForElementVisible(header.link.howWeWork)
      .assert.containsText(header.link.howWeWork, 'КАК МЫ РАБОТАЕМ')
  })

  expected('the link «Блог» is displayed in the header‎', () => {
    browser
      .waitForElementVisible(header.link.blog)
      .assert.containsText(header.link.blog, 'Блог')
  })

  expected('the link «Вакансии»‎ is displayed in the header', () => {
    browser
      .waitForElementVisible(header.link.careers)
      .assert.containsText(header.link.careers, 'Вакансии')
  })

  expected('the link «Контакты» is displayed in the header ', () => {
    browser
      .waitForElementVisible(header.link.contacts)
      .assert.containsText(header.link.contacts, 'Контакты')
      .assert.screenshotElement(header.block.header, 'header ru local')
  })
})

testcase('Menu items «‎Услуги» (RU desktop)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover the cursor over the header item «‎Услуги»', () => {
    browser.moveToElement(header.link.services, 1, 1)
  })

  expected('«Услуги» is marked blue', () => {
    browser.assert.screenshotElement(header.block.header, 'header ru local(move to service)')
  })

  expected('the dropdown displays a link «‎Фронтенд аутсорсинг»‎', () => {
    browser
      .waitForElementVisible(header.link.outsourcing)
      .assert.containsText(header.link.outsourcing, 'Фронтенд аутсорсинг\nРабота над веб-проектами для крупных компаний.')
  })

  expected('the dropdown displays a link «Бэкенд и DevOps»‎', () => {
    browser
      .waitForElementVisible(header.link.backend)
      .assert.containsText(header.link.backend, 'Бэкенд и DevOps\nРазработка полного цикла и настройка окружения.')
  })

  expected('the dropdown displays a link «Разработка MVP»‎', () => {
    browser
      .waitForElementVisible(header.link.mvp)
      .assert.containsText(header.link.mvp, 'Разработка MVP\nКлючевой функционал для проверки бизнес-идей.')
      .assert.screenshotElement(header.block.dropdown, 'header ru local(service dropdown)')
  })
})

testcase('Menu items «‎Портфолио» (RU desktop)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover the cursor over the header item «Портфолио»', () => {
    browser.moveToElement(header.link.portfolio, 1, 1)
  })

  expected('«Портфолио» is marked blue', () => {
    browser.assert.screenshotElement(header.block.header, 'header ru local(move to portfolio)')
  })

  expected('the dropdown displays a link «‎Наши проекты»‎', () => {
    browser
      .waitForElementVisible(header.link.ourProjects)
      .assert.containsText(header.link.ourProjects, 'Наши проекты\nПосмотрите на решения для некоторых из наших клиентов')
  })

  expected('the dropdown displays a link «Медиа и маркетинга»‎', () => {
    browser
      .waitForElementVisible(header.link.mediaAndMarketing)
      .assert.containsText(header.link.mediaAndMarketing, 'Медиа и маркетинга')
  })

  expected('the dropdown displays a link «IT-отрасли»‎', () => {
    browser
      .waitForElementVisible(header.link.information)
      .assert.containsText(header.link.information, 'IT-отрасли')
  })

  expected('the dropdown displays a link «E-Commerce»‎', () => {
    browser
      .waitForElementVisible(header.link.eCommerce)
      .assert.containsText(header.link.eCommerce, 'E-Commerce')
  })

  expected('the dropdown displays a link «Финтеха»‎', () => {
    browser
      .waitForElementVisible(header.link.fintech)
      .assert.containsText(header.link.fintech, 'Финтеха')
      .assert.screenshotElement(header.block.dropdown, 'header ru local(portfolio dropdown)')
  })
})

testcase('Menu items «‎Как мы работаем» (RU desktop)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover the cursor over the header item «Как мы работаем»', () => {
    browser.moveToElement(header.link.howWeWork, 1, 1)
  })

  expected('«Как мы работаем» is marked blue', () => {
    browser.assert.screenshotElement(header.block.header, 'header ru local(move to howWeWork)')
  })

  expected('the dropdown displays a link «Технологии»‎', () => {
    browser
      .waitForElementVisible(header.link.technologies)
      .assert.containsText(header.link.technologies, 'Технологии\nМы внимательно следим за новинками веб-разработки и не забываем про лучшие стандарты.')
  })

  expected('the dropdown displays a link «Процессы»‎', () => {
    browser
      .waitForElementVisible(header.link.processes)
      .assert.containsText(header.link.processes, 'Процессы\nОтлаженные процессы, опыт и внимание к деталям помогают нам создавать успешные проекты.')
      .assert.screenshotElement(header.block.dropdown, 'header ru local(howWeWork dropdown)')
  })
})

testcase('Transitions to pages(RU desktop)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('click on the logo', () => {
    browser.click(header.logo.csssr)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}`, () => {
    browser
      .assert.urlEquals(`${pages.com.url}${pages.ruLocal.url}`)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(header.block.header)
  })

  step('hover the cursor over the header item «‎Услуги»', () => {
    browser.moveToElement(header.link.services, 1, 1)
  })

  step('click on the link «‎Фронтенд аутсорсинг»‎', () => {
    browser.click(header.link.outsourcing)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.outsourcingFrontEnd.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.outsourcingFrontEnd.url}`)
  })

  step('hover the cursor over the header item «‎Услуги»', () => {
    browser.moveToElement(header.link.services, 1, 1)
  })

  step('click on the link «‎Бэкенд и DevOps»‎', () => {
    browser.click(header.link.backend)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.backEndAndDevops.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.backEndAndDevops.url}`)
  })

  step('hover the cursor over the header item «‎Услуги»', () => {
    browser.moveToElement(header.link.services, 1, 1)
  })

  step('click on the link «‎Разработка MVP»‎', () => {
    browser.click(header.link.mvp)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.mvpDevelopment.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.mvpDevelopment.url}`)
  })

  step('hover the cursor over the header item «Портфолио»', () => {
    browser.moveToElement(header.link.portfolio, 1, 1)
  })

  step('click on the link «‎Наши проекты»‎', () => {
    browser.click(header.link.ourProjects)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.ourProjects.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.ourProjects.url}`)
  })

  step('hover the cursor over the header item «Портфолио»', () => {
    browser.moveToElement(header.link.portfolio, 1, 1)
  })

  step('click on the link «‎Медиа и маркетинга»‎', () => {
    browser.click(header.link.mediaAndMarketing)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.mediaAndMarketing.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.mediaAndMarketing.url}`)
  })

  step('hover the cursor over the header item «Портфолио»', () => {
    browser.moveToElement(header.link.portfolio, 1, 1)
  })

  step('click on the link «‎IT-отрасли»‎', () => {
    browser.click(header.link.information)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.information.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.information.url}`)
  })

  step('hover the cursor over the header item «Портфолио»', () => {
    browser.moveToElement(header.link.portfolio, 1, 1)
  })

  step('click on the link «‎E-Commerce»‎', () => {
    browser.click(header.link.eCommerce)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.eCommerce.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.eCommerce.url}`)
  })

  step('hover the cursor over the header item «Портфолио»', () => {
    browser.moveToElement(header.link.portfolio, 1, 1)
  })

  step('click on the link «Финтеха»‎', () => {
    browser.click(header.link.fintech)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.fintech.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.fintech.url}`)
  })

  step('hover the cursor over the header item «Как мы работаем»', () => {
    browser.moveToElement(header.link.howWeWork, 1, 1)
  })

  step('click on the link «Технологии»‎', () => {
    browser.click(header.link.technologies)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.technologies.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.technologies.url}`)
  })

  step('hover the cursor over the header item «Как мы работаем»', () => {
    browser.moveToElement(header.link.howWeWork, 1, 1)
  })

  step('click on the link «Процессы»‎', () => {
    browser.click(header.link.processes)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.processes.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.processes.url}`)
  })

  step('click on the link «Блог»‎', () => {
    browser.click(header.link.blog)
  })

  expected(`remained on the current page`, () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}`)
  })

  step('click on the link «Вакансии»‎', () => {
    browser.click(header.link.careers)
  })

  expected(`go to page ${pages.com.url}${pages.careers.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.careers.url}`)
  })

  step('click on the link «Контакты»‎', () => {
    browser.click(header.link.contacts)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.contacts.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.contacts.url}`)
  })
})

testcase('Displaying the burger menu(RU mobile)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .setWindowSize(765, 1080)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  expected('the mobile header is displayed', () => {
    browser
      .waitForElementVisible(header.button.burger)
      .assert.screenshotElement(header.block.header, 'header mobile ru local')
  })

  step('click on the burger', () => {
    browser.click(header.button.burger)
  })

  expected('the menu popped up', () => {
    browser
      .assert.containsText(header.button.services, 'УСЛУГИ')
      .assert.containsText(header.button.portfolio, 'ПОРТФОЛИО')
      .assert.containsText(header.button.howWeWork, 'КАК МЫ РАБОТАЕМ')
      .assert.containsText(header.link.blog, 'Блог')
      .assert.containsText(header.link.careers, 'Вакансии')
      .assert.containsText(header.link.contacts, 'Контакты')
  })

  expected('burger icon has changed to a cross', () => {
    browser.assert.screenshotElement(header.block.header, 'header mobile(no burger) ru local')
  })

  step('click on the cross', () => {
    browser.click(header.button.burger)
  })

  expected('the menu is closed', () => {
    browser
      .waitForElementNotVisible(header.button.services)
  })

  expected('the mobile header is displayed c иконкой бургера', () => {
    browser.assert.screenshotElement(header.block.header, 'header mobile ru local')
  })
})

testcase('Transitions to pages(RU mobile)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .setWindowSize(765, 1080)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  step('click on the logo', () => {
    browser.click(header.logo.csssr)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}`, () => {
    browser
      .assert.urlEquals(`${pages.com.url}${pages.ruLocal.url}`)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(header.block.header)
  })

  step('click on the burger', () => {
    browser.click(header.button.burger)
  })

  step('click on the item «‎Услуги» in the header', () => {
    browser.click(header.button.services)
  })

  step('click on the link «‎Фронтенд аутсорсинг»‎', () => {
    browser.click(header.link.outsourcing)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.outsourcingFrontEnd.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.outsourcingFrontEnd.url}`)
  })

  step('click on the link «‎Бэкенд и DevOps»‎', () => {
    browser.click(header.link.backend)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.backEndAndDevops.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.backEndAndDevops.url}`)
  })

  step('click on the link «‎Разработка MVP»‎', () => {
    browser.click(header.link.mvp)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.mvpDevelopment.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.mvpDevelopment.url}`)
  })

  step('click on «Услуги» in the breadcrumbs‎', () => {
    browser.click(header.link.backToMainMenu)
  })

  step('click on the item «Портфолио» in the header', () => {
    browser.click(header.button.portfolio)
  })

  step('click on the link «‎Наши проекты»‎', () => {
    browser.click(header.link.ourProjects)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.ourProjects.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.ourProjects.url}`)
  })

  step('click on the link «‎Медиа и маркетинга»‎', () => {
    browser.click(header.link.mediaAndMarketing)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.mediaAndMarketing.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.mediaAndMarketing.url}`)
  })

  step('click on the link «‎IT-отрасли»‎', () => {
    browser.click(header.link.information)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.information.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.information.url}`)
  })

  step('click on the link «‎E-Commerce»‎', () => {
    browser.click(header.link.eCommerce)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.eCommerce.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.eCommerce.url}`)
  })

  step('click on the link «Финтеха»‎', () => {
    browser
      .moveToElement(header.link.fintech, 1, 1)
      .click(header.link.fintech)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.fintech.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.fintech.url}`)
  })

  step('click on «Портфолио» in the breadcrumbs‎', () => {
    browser.click(header.link.backToMainMenu)
  })

  step('click on the item «Как мы работаем» in the header', () => {
    browser.click(header.button.howWeWork)
  })

  step('click on the link «Технологии»‎', () => {
    browser.click(header.link.technologies)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.technologies.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.technologies.url}`)
  })

  step('click on the link «Процессы»‎', () => {
    browser.click(header.link.processes)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.processes.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.processes.url}`)
  })

  step('click on «Как мы работаем» in the breadcrumbs‎', () => {
    browser.click(header.link.backToMainMenu)
  })

  step('click on the link «Блог»‎', () => {
    browser.click(header.link.blog)
  })

  expected(`remained on the current page`, () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}`)
  })

  step('click on the burger', () => {
    browser.click(header.button.burger)
  })

  step('click on the link «Вакансии»‎', () => {
    browser.click(header.link.careers)
  })

  expected(`go to page ${pages.com.url}${pages.careers.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.careers.url}`)
  })

  step('click on the link «Контакты»‎', () => {
    browser.click(header.link.contacts)
  })

  expected(`go to page ${pages.com.url}${pages.ruLocal.url}${pages.contacts.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.contacts.url}`)
  })
})

testcase('Contents of the header for the EN locale', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  expected('the logo is displayed in the header', () => {
    browser
      .waitForElementVisible(header.logo.csssr)
  })

  expected('the link «‎Services» is displayed in the header‎', () => {
    browser
      .waitForElementVisible(header.link.services)
      .assert.containsText(header.link.services, 'SERVICES')
  })

  expected('the link «Portfolio» is displayed in the header‎', () => {
    browser
      .waitForElementVisible(header.link.portfolio)
      .assert.containsText(header.link.portfolio, 'PORTFOLIO')
  })

  expected('the link «‎How we work» is displayed in the header ‎', () => {
    browser
      .waitForElementVisible(header.link.howWeWork)
      .assert.containsText(header.link.howWeWork, 'HOW WE WORK')
  })

  expected('the link «‎Solutions» is displayed in the header‎', () => {
    browser
      .waitForElementVisible(header.link.solutions)
      .assert.containsText(header.link.solutions, 'SOLUTIONS')
  })

  expected('the link «Blog» is displayed in the header‎', () => {
    browser
      .waitForElementVisible(header.link.blog)
      .assert.containsText(header.link.blog, 'Blog')
  })

  expected('the link «Careers» is displayed in the header ‎', () => {
    browser
      .waitForElementVisible(header.link.careers)
      .assert.containsText(header.link.careers, 'Careers')
  })

  expected('the link «Contacts» is displayed in the header', () => {
    browser
      .waitForElementVisible(header.link.contacts)
      .assert.containsText(header.link.contacts, 'Contacts')
      .assert.screenshotElement(header.block.header, 'header en local')
  })
})

testcase('Menu items «‎Services» (EN desktop)', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover the cursor over the header item «‎Services»', () => {
    browser.moveToElement(header.link.services, 1, 1)
  })

  expected('«Services» is marked blue', () => {
    browser.assert.screenshotElement(header.block.header, 'header en local(move to service)')
  })

  expected('the dropdown displays a link «Outsourcing Front-end»‎', () => {
    browser
      .waitForElementVisible(header.link.outsourcing)
      .assert.containsText(header.link.outsourcing, 'Outsourcing Front-end\nWeb development to complement core competencies')
  })

  expected('the dropdown displays a link «Back-end and DevOps»‎', () => {
    browser
      .waitForElementVisible(header.link.backend)
      .assert.containsText(header.link.backend, 'Back-end and DevOps\nReliable back-end development and DevOps services.')
  })

  expected('the dropdown displays a link «MVP Development»‎', () => {
    browser
      .waitForElementVisible(header.link.mvp)
      .assert.containsText(header.link.mvp, 'MVP Development\nDevelopment of core functionality for testing purposes.')
  })

  expected('the dropdown displays a link «DesignLab»‎', () => {
    browser
      .waitForElementVisible(header.link.design)
      .assert.containsText(header.link.design, 'DesignLab\nDesign expertise with a focus on what really matters: users, investors, and revenue.')
      .assert.screenshotElement(header.block.dropdown, 'header en local(service dropdown)')
  })
})

testcase('Menu items «‎Portfolio» (EN desktop)', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover the cursor over the header item «‎Portfolio»', () => {
    browser.moveToElement(header.link.portfolio, 1, 1)
  })

  expected('«‎Portfolio» is marked blue', () => {
    browser.assert.screenshotElement(header.block.header, 'header en local(move to portfolio)')
  })

  expected('the dropdown displays a link «‎Our projects»‎', () => {
    browser
      .waitForElementVisible(header.link.ourProjects)
      .assert.containsText(header.link.ourProjects, 'Our projects\nTake a look at solutions we have developed for some of our clients')
  })

  expected('the dropdown displays a link «Media and marketing»‎', () => {
    browser
      .waitForElementVisible(header.link.mediaAndMarketing)
      .assert.containsText(header.link.mediaAndMarketing, 'Media and marketing')
  })

  expected('the dropdown displays a link «IT industry»‎', () => {
    browser
      .waitForElementVisible(header.link.information)
      .assert.containsText(header.link.information, 'IT industry')
  })

  expected('the dropdown displays a link «E-Commerce»‎', () => {
    browser
      .waitForElementVisible(header.link.eCommerce)
      .assert.containsText(header.link.eCommerce, 'E-Commerce')
  })

  expected('the dropdown displays a link «Fintech»‎', () => {
    browser
      .waitForElementVisible(header.link.fintech)
      .assert.containsText(header.link.fintech, 'Fintech')
      .assert.screenshotElement(header.block.dropdown, 'header en local(portfolio dropdown)')
  })
})

testcase('Menu items «How we work» (EN desktop)', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover the cursor over the header item «How we work»', () => {
    browser.moveToElement(header.link.howWeWork, 1, 1)
  })

  expected('«How we work» is marked blue', () => {
    browser.assert.screenshotElement(header.block.header, 'header en local(move to howWeWork)')
  })

  expected('the dropdown displays a link «Technologies»‎', () => {
    browser
      .waitForElementVisible(header.link.technologies)
      .assert.containsText(header.link.technologies, 'Technologies\nWe keep a careful eye on emerging web development trends and never compromise best practice.')
  })

  expected('the dropdown displays a link «Our Process»‎', () => {
    browser
      .waitForElementVisible(header.link.processes)
      .assert.containsText(header.link.processes, 'Our Process\nAttention to detail and well established business processes differentiate successful projects and those that are just average.')
      .assert.screenshotElement(header.block.dropdown, 'header en local(howWeWork dropdown)')
  })
})

testcase('Menu items «Solutions» (EN desktop)', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover the cursor over the header item «Solutions»', () => {
    browser.moveToElement(header.link.solutions, 1, 1)
  })

  expected('«Solutions» is marked blue', () => {
    browser.assert.screenshotElement(header.block.header, 'header en local(move to Solutions)')
  })

  expected('the dropdown displays a link «Modular LMS Platform»‎', () => {
    browser
      .waitForElementVisible(header.link.lms)
      .assert.containsText(header.link.lms, 'Modular LMS Platform\nStart you E-Learning business with or LMS. We offer design and development teams to do all the necessary integrations and customization')
  })

  expected('the dropdown displays a link «Time-tracking Software»‎', () => {
    browser
      .waitForElementVisible(header.link.tracker)
      .assert.containsText(header.link.tracker, 'Time-tracking Software\nWe’ve created an app that helps us manage time on our projects. Give it a try')
      .assert.screenshotElement(header.block.dropdown, 'header en local(Solutions dropdown)')
  })
})

testcase('Transitions to pages(EN desktop)', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('click on the logo', () => {
    browser.click(header.logo.csssr)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}`, () => {
    browser
      .assert.urlEquals(`${pages.com.url}${pages.enLocal.url}`)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementPresent(header.block.header)
  })

  step('hover the cursor over the header item «‎Services»', () => {
    browser.moveToElement(header.link.services, 1, 1)
  })

  step('click on the link «Outsourcing Front-end»‎', () => {
    browser.click(header.link.outsourcing)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.outsourcingFrontEnd.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.outsourcingFrontEnd.url}`)
  })

  step('hover the cursor over the header item «‎Services»', () => {
    browser.moveToElement(header.link.services, 1, 1)
  })

  step('click on the link «‎Back-end and DevOps»‎', () => {
    browser.click(header.link.backend)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.backEndAndDevops.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.backEndAndDevops.url}`)
  })

  step('hover the cursor over the header item «‎Services»', () => {
    browser.moveToElement(header.link.services, 1, 1)
  })

  step('click on the link «‎MVP Development»‎', () => {
    browser.click(header.link.mvp)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.mvpDevelopment.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.mvpDevelopment.url}`)
  })

  step('hover the cursor over the header item «‎Services»', () => {
    browser.moveToElement(header.link.services, 1, 1)
  })


  step('click on the link «‎DesignLab»‎', () => {
    browser.click(header.link.design)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.design.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.design.url}`)
  })

  step('hover the cursor over the header item «Portfolio»', () => {
    browser.moveToElement(header.link.portfolio, 1, 1)
  })

  step('click on the link «‎Our projects»‎', () => {
    browser.click(header.link.ourProjects)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.ourProjects.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.ourProjects.url}`)
  })

  step('hover the cursor over the header item «Portfolio»', () => {
    browser.moveToElement(header.link.portfolio, 1, 1)
  })

  step('click on the link «‎Media and marketing»‎', () => {
    browser.click(header.link.mediaAndMarketing)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.mediaAndMarketing.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.mediaAndMarketing.url}`)
  })

  step('hover the cursor over the header item «Portfolio»', () => {
    browser.moveToElement(header.link.portfolio, 1, 1)
  })

  step('click on the link «IT industry»‎', () => {
    browser.click(header.link.information)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.information.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.information.url}`)
  })

  step('hover the cursor over the header item «Portfolio»', () => {
    browser.moveToElement(header.link.portfolio, 1, 1)
  })

  step('click on the link «‎E-Commerce»‎', () => {
    browser.click(header.link.eCommerce)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.eCommerce.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.eCommerce.url}`)
  })

  step('hover the cursor over the header item «Portfolio»', () => {
    browser.moveToElement(header.link.portfolio, 1, 1)
  })

  step('click on the link «Fintech»‎', () => {
    browser.click(header.link.fintech)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.fintech.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.fintech.url}`)
  })

  step('hover the cursor over the header item «How we work»', () => {
    browser.moveToElement(header.link.howWeWork, 1, 1)
  })

  step('click on the link «Technologies»‎', () => {
    browser.click(header.link.technologies)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.technologies.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.technologies.url}`)
  })

  step('hover the cursor over the header item «How we work»', () => {
    browser.moveToElement(header.link.howWeWork, 1, 1)
  })

  step('click on the link «Our Process»‎', () => {
    browser.click(header.link.processes)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.processes.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.processes.url}`)
  })

  step('hover the cursor over the header item «Solutions»', () => {
    browser.moveToElement(header.link.solutions, 1, 1)
  })

  step('click on the link «Modular LMS Platform»‎', () => {
    browser.click(header.link.lms)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.lms.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.lms.url}`)
  })

  step('hover the cursor over the header item «Solutions»', () => {
    browser.moveToElement(header.link.solutions, 1, 1)
  })

  step('click on the link «Time-tracking Software»‎', () => {
    browser.click(header.link.tracker)
  })

  expected(`go to page ${pages.traker.url}`, () => {
    checkUrlInNewWindow(`${pages.traker.url}`)
  })

  step('click on the link «Blog»‎', () => {
    browser.click(header.link.blog)
  })

  expected(`remained on the current page`, () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}`)
  })

  step('click on the link «Careers»‎', () => {
    browser.click(header.link.careers)
  })

  expected(`go to page ${pages.com.url}${pages.careersEn.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.careersEn.url}`)
  })

  step('click on the link «Contacts»‎', () => {
    browser.click(header.link.contacts)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.contacts.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.contacts.url}`)
  })
})

testcase('Displaying the burger menu(EN mobile)', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .setWindowSize(765, 1080)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  expected('the mobile header is displayed', () => {
    browser
      .waitForElementVisible(header.button.burger)
      .assert.screenshotElement(header.block.header, 'header mobile en local')
  })

  step('click on the burger', () => {
    browser.click(header.button.burger)
  })

  expected('the menu popped up', () => {
    browser
      .assert.containsText(header.button.services, 'SERVICES')
      .assert.containsText(header.button.portfolio, 'PORTFOLIO')
      .assert.containsText(header.button.howWeWork, 'HOW WE WORK')
      .assert.containsText(header.button.products, 'SOLUTION')
      .assert.containsText(header.link.blog, 'Blog')
      .assert.containsText(header.link.careers, 'Careers')
      .assert.containsText(header.link.contacts, 'Contacts')
  })

  expected('burger icon has changed to a cross', () => {
    browser.assert.screenshotElement(header.block.header, 'header mobile(no burger) en local')
  })

  step('click on the cross', () => {
    browser.click(header.button.burger)
  })

  expected('the menu is closed', () => {
    browser
      .waitForElementNotVisible(header.button.services)
  })

  expected('the mobile header is displayed c иконкой бургера', () => {
    browser.assert.screenshotElement(header.block.header, 'header mobile en local')
  })
})

testcase('Transitions to pages(EN mobile)', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .setWindowSize(765, 1080)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
      .click(header.button.closeCookiesAlert)
  })

  step('click on the logo', () => {
    browser.click(header.logo.csssr)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}`, () => {
    browser
      .assert.urlEquals(`${pages.com.url}${pages.enLocal.url}`)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementPresent(header.block.header)
  })

  step('click on the burger', () => {
    browser.click(header.button.burger)
  })

  step('click on the item «‎Services» in the header', () => {
    browser.click(header.button.services)
  })

  step('click on the link «Outsourcing Front-end»‎', () => {
    browser.click(header.link.outsourcing)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.outsourcingFrontEnd.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.outsourcingFrontEnd.url}`)
  })

  step('click on the link «‎Back-end and DevOps»‎', () => {
    browser.click(header.link.backend)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.backEndAndDevops.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.backEndAndDevops.url}`)
  })

  step('click on the link «‎MVP Development»‎', () => {
    browser.click(header.link.mvp)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.mvpDevelopment.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.mvpDevelopment.url}`)
  })

  step('click on the link «DesignLab»‎', () => {
    browser.click(header.link.design)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.design.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.design.url}`)
  })

  step('click on «Services» in the breadcrumbs', () => {
    browser.click(header.link.backToMainMenu)
  })

  step('click on the item «Portfolio» in the header', () => {
    browser.click(header.button.portfolio)
  })

  step('click on the link «‎Our projects»‎', () => {
    browser.click(header.link.ourProjects)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.ourProjects.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.ourProjects.url}`)
  })

  step('click on the link «‎Media and marketing»‎', () => {
    browser.click(header.link.mediaAndMarketing)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.mediaAndMarketing.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.mediaAndMarketing.url}`)
  })

  step('click on the link «IT industry»‎', () => {
    browser.click(header.link.information)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.information.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.information.url}`)
  })

  step('click on the link «‎E-Commerce»‎', () => {
    browser.click(header.link.eCommerce)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.eCommerce.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.eCommerce.url}`)
  })

  step('click on the link «Fintech»‎', () => {
    browser
      .moveToElement(header.link.fintech, 1, 1)
      .click(header.link.fintech)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.fintech.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.fintech.url}`)
  })

  step('click on «Portfolio» in the breadcrumbs‎', () => {
    browser.click(header.link.backToMainMenu)
  })

  step('click on the item «How we work» in the header', () => {
    browser.click(header.button.howWeWork)
  })

  step('click on the link «Technologies»‎', () => {
    browser.click(header.link.technologies)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.technologies.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.technologies.url}`)
  })

  step('click on the link «Our Process»‎', () => {
    browser.click(header.link.processes)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.processes.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.processes.url}`)
  })

  step('click on «How we work» in the breadcrumbs‎', () => {
    browser.click(header.link.backToMainMenu)
  })

  step('click on the item «Solutions» in the header', () => {
    browser.click(header.button.products)
  })

  step('click on the link «Modular LMS Platform»‎', () => {
    browser.click(header.link.lms)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.lms.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.lms.url}`)
  })

  step('click on the link «Time-tracking Software»‎', () => {
    browser.click(header.link.tracker)
  })

  expected(`go to page ${pages.traker.url}`, () => {
    checkUrlInNewWindow(`${pages.traker.url}`)
  })

  step('click on «Solutions» in the breadcrumbs‎', () => {
    browser.click(header.link.backToMainMenu)
  })

  step('click on the link «Blog»‎', () => {
    browser.click(header.link.blog)
  })

  expected(`remained on the current page`, () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}`)
  })

  step('click on the burger', () => {
    browser.click(header.button.burger)
  })

  step('click on the link «Careers»‎', () => {
    browser.click(header.link.careers)
  })

  expected(`go to page ${pages.com.url}${pages.careersEn.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.careersEn.url}`)
  })

  step('click on the link «Contacts»‎', () => {
    browser.click(header.link.contacts)
  })

  expected(`go to page ${pages.com.url}${pages.enLocal.url}${pages.contacts.url}`, () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.enLocal.url}${pages.contacts.url}`)
  })
})

