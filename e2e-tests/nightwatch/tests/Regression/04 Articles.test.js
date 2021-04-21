const pages = require('../data/pages')
const header = require('../pageObject/header.js')
const articles = require('../pageObject/articles.js')
const { checkUrlInNewWindow } = require('../actions/window')
const ANIMATION_DURATION_IN_MS = 2000

testcase('Displaying articles (RU local)', () => {
  step(`go to the article via a direct link`, () => {
    browser
      .setWindowSize(1920, 4800)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.articleRu.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser.assert.screenshotElement(articles.block.fullPage, 'how to be a beginner developer(RU)')
  })

  step('click on the category above the article title', () => {
    browser.click(articles.link.culture)
  })

  expected('the main page opens with the selected category like that article', () => {
    browser
      .waitForElementPresent(header.link.allArticles)
      .assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.culture.url}`)
  })
})

testcase('Contents of articles (RU local)', () => {
  step(`go to the article «Итоги 2019 от CSSSR»`, () => {
    browser
      .setWindowSize(1920, 8000)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.yearResume2019.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser
      .assert.screenshotElement(articles.block.fullPage, 'year resume 2019(RU)')
  })

  step(`go to the article «Оценка задач. Как перестать гадать и начать угадывать»`, () => {
    browser
      .setWindowSize(1920, 5000)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.estimateLikeGod.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser
      .assert.screenshotElement(articles.block.fullPage, 'estimate like god(RU)')
  })

  step(`go to the article «Есть ли жизнь на удалёнке или как перестать верить в единорогов»`, () => {
    browser
      .setWindowSize(1920, 9400)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.unicornBusters.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser
      .assert.screenshotElement(articles.block.fullPage, 'unicorn busters(RU)')
  })

  step(`go to the article «Формальная и интуитивная семантика языка программирования на примерах JS и JSX»`, () => {
    browser
      .setWindowSize(1920, 17400)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.semanticsInProgramming.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser
      .assert.screenshotElement(articles.block.fullPage, 'semantics in programming(RU)')
  })

  step(`go to the article «Стимуляторы работы программиста. Здоровье»`, () => {
    browser
      .setWindowSize(1920, 6800)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.workStronger.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser
      .assert.screenshotElement(articles.block.fullPage, 'work stronger(RU)')
  })

  step(`go to the article «Стимуляторы работы программиста. Мотивация»`, () => {
    browser
      .setWindowSize(1920, 6300)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.workHarder.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser
      .assert.screenshotElement(articles.block.fullPage, 'work harder(RU)')
  })

  step(`go to the article «Стимуляторы работы программиста. Обстановка»`, () => {
    browser
      .setWindowSize(1920, 5400)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.workBetter.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser
      .assert.screenshotElement(articles.block.fullPage, 'work better(RU)')
  })
})

testcase('Rolling boxes Newsletter and Share (RU local)', () => {
  step(`go to the article via a direct link`, () => {
    browser
      .setWindowSize(1920, 1080)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.articleRu.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('subscription and sharing block is displayed correctly', () => {
    browser.assert.screenshotElement(articles.block.fullPage, 'how to be a beginner developer(RU)')
  })

  step('scrolling to the middle of the page', () => {
    browser
      .moveToElement(articles.text.titleInCenterPage, 1, 1)
      .click(articles.text.titleInCenterPage)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('the subscription block is located correctly on the page', () => {
    browser.assert.screenshotElement(articles.block.fullPage, 'subscription block in the center page')
  })

  step('scrolling to the end of the page', () => {
    browser
      .click(articles.link.markdown)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('the subscription block is located correctly on the page', () => {
    browser.assert.screenshotElement(articles.block.fullPage, 'subscription block in the end page')
  })
})

testcase('Layout of the Newsletter+Share block at different resolutions (RU local)', () => {
  step(`go to the article via a direct link`, () => {
    browser
      .setWindowSize(1360, 3000)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.articleRu.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('subscription and sharing block is displayed in 1360px', () => {
    browser.assert.screenshotElement(articles.block.fullPage, 'how to be a beginner developer 1360(RU)')
  })

  expected('subscription and sharing block is displayed in 1280px', () => {
    browser
      .setWindowSize(1280, 1000)
      .assert.screenshotElement(articles.block.fullPage, 'how to be a beginner developer 1280(RU)')
  })

  expected('subscription and sharing block is displayed in 768px', () => {
    browser
      .setWindowSize(768, 1000)
      .assert.screenshotElement(articles.block.fullPage, 'how to be a beginner developer 768(RU)')
  })

  expected('subscription and sharing block is displayed in 360px', () => {
    browser
      .setWindowSize(360, 6200)
      .assert.screenshotElement(articles.block.fullPage, 'how to be a beginner developer 360(RU)')
  })
})

testcase('Successful subscription to the Newsletter (RU local)', () => {
  step(`go to the article via a direct link`, () => {
    browser
      .setWindowSize(1920, 2000)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.articleRu.url}`)
      .waitForElementVisible(articles.block.post)
  })

  step('click on the «email» field', () => {
    browser.click(articles.textField.emailNewsletterForm)
  })

  expected('the subscription form has changed', () => {
    browser.assert.screenshotElement(articles.block.newsletterForm, 'newsletterForm email textfield')
  })

  step('enter a valid email in the field «email»', () => {
    browser.setValue(articles.textField.emailNewsletterForm, '1@2.ru')
  })

  step('click on the button «Подписаться»', () => {
    browser.click(articles.button.submitNewsletterForm)
  })

  expected('type of subscribe form when successful', () => {
    browser
      .waitForElementPresent(articles.text.successNewsletterForm)
      .assert.screenshotElement(articles.block.newsletterForm, 'newsletterForm successful')
  })
})

testcase('Failed subscription to the Newsletter (RU local)', () => {
  step(`go to the article via a direct link`, () => {
    browser
      .setWindowSize(1920, 2000)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.articleRu.url}`)
      .waitForElementVisible(articles.block.post)
  })

  step('click on the «email» field', () => {
    browser.click(articles.textField.emailNewsletterForm)
  })

  expected('the text of the policy is displayed', () => {
    browser.assert.screenshotElement(articles.block.newsletterForm, 'newsletterForm email textfield')
  })

  step('remove focus from email field', () => {
    browser.click(articles.text.titleNewsletterForm)
  })

  expected('the text of the policy is hidden', () => {
    browser.assert.screenshotElement(articles.block.newsletterForm, 'newsletterForm the policy is hidden')
  })

  step('enter a invalid email in the field «email»', () => {
    browser
      .click(articles.textField.emailNewsletterForm)
      .setValue(articles.textField.emailNewsletterForm, '1@2.ru')
  })

  step('remove focus from email field', () => {
    browser.click(articles.text.titleNewsletterForm)
  })

  expected('the text of the policy is displayed', () => {
    browser.assert.screenshotElement(articles.block.newsletterForm, 'newsletterForm email textfield(filled out)')
  })

  step('click on the blue «Политика конфиденциальности» link', () => {
    browser.click(articles.link.privacyPolicy)
  })

  expected('a new tab opened on the Policy page at csssr.com', () => {
    checkUrlInNewWindow(`${pages.com.url}${pages.ruLocal.url}${pages.privacyPolicy.url}`)
  })
})

testcase('Displaying articles (EN local)', () => {
  step(`go to the article via a direct link`, () => {
    browser
      .setWindowSize(1920, 6100)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.howCloseYourOutsourcedTeam.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser.assert.screenshotElement(articles.block.fullPage, 'how Close Your Outsourced Team(EN)')
  })

  step('click on the category above the article title', () => {
    browser.click(articles.link.business)
  })

  expected('the main page opens with the selected category like that article', () => {
    browser
      .waitForElementPresent(header.link.allArticles)
      .assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.business.url}`)
  })
})

testcase('Contents of articles (EN local)', () => {
  step(`go to the article «How Close Your Outsourced Team Should Be Located? Pros and Cons»`, () => {
    browser
      .setWindowSize(1920, 6000)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.howCloseYourOutsourcedTeam.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser
      .assert.screenshotElement(articles.block.fullPage, 'How Close Your Outsourced Team(EN)')
  })

  step(`go to the article «Augmented & Virtual Reality to Shape the Future of Web Development»`, () => {
    browser
      .setWindowSize(1920, 5000)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.augmentedAndVirtualReality.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser
      .assert.screenshotElement(articles.block.fullPage, 'Augmented & Virtual Reality (EN)')
  })

  step(`go to the article «HTML CMS or Custom Development: Which is Better»`, () => {
    browser
      .setWindowSize(1920, 4000)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.htmlOrCmsOrCustomDevelopment.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser
      .assert.screenshotElement(articles.block.fullPage, 'HTML CMS or Custom Development(EN)')
  })

  step(`go to the article «Offshore Web Development: Top Destinations For Singapore»`, () => {
    browser
      .setWindowSize(1920, 6800)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.offshoreWebDevelopment.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser
      .assert.screenshotElement(articles.block.fullPage, 'Offshore Web Development(EN)')
  })

  step(`go to the article «Eight Ways to Improve Staff Motivation or How to Mend Broken Morale»`, () => {
    browser
      .setWindowSize(1920, 7000)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.eightWaysToImproveStaffMotivation.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser
      .assert.screenshotElement(articles.block.fullPage, 'Eight Ways to Improve Staff(EN)')
  })

  step(`go to the article «Ten Tips and Best Practices for Accurately Task Estimating»`, () => {
    browser
      .setWindowSize(1920, 5500)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.tipsForTaskEstimating.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser
      .assert.screenshotElement(articles.block.fullPage, 'en Tips and Best Practices(EN)')
  })

  step(`go to the article «The Baltic E-Success: A Brief Introduction to the Estonian IT Industry»`, () => {
    browser
      .setWindowSize(1920, 3500)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.theBalticESuccess.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser
      .assert.screenshotElement(articles.block.fullPage, 'The Baltic E-Success(EN)')
  })

  step(`go to the article «How to Integrate Creative and Web Development»`, () => {
    browser
      .setWindowSize(1920, 6000)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.creativeAndWebDevelopment.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser
      .assert.screenshotElement(articles.block.fullPage, 'How to Integrate Creative(EN)')
  })
})

testcase('Rolling boxes Newsletter and Share (EN local)', () => {
  step(`go to the article «How Close Your Outsourced Team Should Be Located? Pros and Cons»`, () => {
    browser
      .setWindowSize(1920, 1200)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.howCloseYourOutsourcedTeam.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('the article page is displayed correctly', () => {
    browser
      .assert.screenshotElement(articles.block.fullPage, 'How Close Your Outsourced Team(EN)')
  })

  step('scrolling to the middle of the page', () => {
    browser
      .moveToElement(articles.text.titleInCenterPage, 1, 1)
      .click(articles.text.titleInCenterPage)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('the subscription block is located correctly on the page', () => {
    browser.assert.screenshotElement(articles.block.fullPage, 'subscription block in the center page (EN)')
  })

  step('scrolling to the end of the page', () => {
    browser
      .click(articles.link.markdown)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('the subscription block is located correctly on the page', () => {
    browser.assert.screenshotElement(articles.block.fullPage, 'subscription block in the end page (EN)')
  })
})

testcase('Layout of the Newsletter+Share block at different resolutions (EN local)', () => {
  step(`go to the article «How Close Your Outsourced Team Should Be Located? Pros and Cons»`, () => {
    browser
      .setWindowSize(1360, 1000)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.howCloseYourOutsourcedTeam.url}`)
      .waitForElementVisible(articles.block.post)
  })

  expected('subscription and sharing block is displayed in 1360px', () => {
    browser.assert.screenshotElement(articles.block.fullPage, 'How Close Your Outsourced Team 1360(EN)')
  })

  expected('subscription and sharing block is displayed in 1280px', () => {
    browser
      .setWindowSize(1280, 1000)
      .assert.screenshotElement(articles.block.fullPage, 'How Close Your Outsourced Team 1280(EN)')
  })

  expected('subscription and sharing block is displayed in 768px', () => {
    browser
      .setWindowSize(768, 1000)
      .assert.screenshotElement(articles.block.fullPage, 'How Close Your Outsourced Team 768(EN)')
  })

  expected('subscription and sharing block is displayed in 360px', () => {
    browser
      .setWindowSize(360, 6200)
      .assert.screenshotElement(articles.block.fullPage, 'How Close Your Outsourced Team 360(EN)')
  })
})

testcase('Redirects from old articles', () => {
  expected(`Redirects from old articles work successfully`, () => {
    browser
      .url(`${pages.blogRu.url}${pages.oldUrl.qaCodex}`)
      .assert.urlEquals(`${browser.launch_url}${pages.newUrl.qaCodex}`)
      .url(`${pages.blogRu.url}${pages.oldUrl.yearResume2019}`)
      .assert.urlEquals(`${browser.launch_url}${pages.newUrl.yearResume2019}`)
      .url(`${pages.blogRu.url}${pages.oldUrl.estimateLikeGod}`)
      .assert.urlEquals(`${browser.launch_url}${pages.newUrl.estimateLikeGod}`)
      .url(`${pages.blogRu.url}${pages.oldUrl.unicornBusters}`)
      .assert.urlEquals(`${browser.launch_url}${pages.newUrl.unicornBusters}`)
      .url(`${pages.blogRu.url}${pages.oldUrl.semanticsInProgramming}`)
      .assert.urlEquals(`${browser.launch_url}${pages.newUrl.semanticsInProgramming}`)
  })
})

testcase('Filtering by category (RU local)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  expected('all categories are displayed', () => {
    browser
      .waitForElementPresent(header.link.allArticles)
      .waitForElementPresent(header.link.management)
      .waitForElementPresent(header.link.webDevelopment)
      .waitForElementPresent(header.link.culture)
      .waitForElementPresent(header.link.news)
  })

  step('click on a category «Менеджмент»', () => {
    browser.click(header.link.management)
  })

  expected(`added to the url «${pages.management.url}»`, () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.management.url}`)
  })

  expected(`underlined item «Менеджмент»`, () => {
    browser.assert.screenshotElement(header.block.categories, 'management selected (RU)')
  })

  step('click on a category «Разработка»', () => {
    browser.click(header.link.webDevelopment)
  })

  expected(`added to the url «${pages.webDevelopment.url}»`, () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.webDevelopment.url}`)
  })

  expected(`underlined item «Разработка»`, () => {
    browser.assert.screenshotElement(header.block.categories, 'webDevelopment selected (RU)')
  })

  step('click on a category «Культура»', () => {
    browser.click(header.link.culture)
  })

  expected(`added to the url «${pages.culture.url}»`, () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.culture.url}`)
  })

  expected(`underlined item «Культура»`, () => {
    browser.assert.screenshotElement(header.block.categories, 'culture selected (RU)')
  })

  step('click on a category «Новости»', () => {
    browser.click(header.link.news)
  })

  expected(`added to the url «${pages.news512.url}»`, () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.news512.url}`)
  })

  expected(`underlined item «Новости»`, () => {
    browser.assert.screenshotElement(header.block.categories, 'news selected (RU)')
  })
})

testcase('Filtering by category (EN local)', () => {
  step(`go to the homepage ${pages.enLocal.url}`, () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  expected('all categories are displayed', () => {
    browser
      .waitForElementPresent(header.link.allArticles)
      .waitForElementPresent(header.link.management)
      .waitForElementPresent(header.link.webDevelopment)
      .waitForElementPresent(header.link.business)
  })

  step('click on a category «Management»', () => {
    browser.click(header.link.management)
  })

  expected(`added to the url «${pages.management.url}»`, () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.management.url}`)
  })

  expected(`underlined item «Management»`, () => {
    browser.assert.screenshotElement(header.block.categories, 'management selected (EN)')
  })

  step('click on a category «Web development»', () => {
    browser.click(header.link.webDevelopment)
  })

  expected(`added to the url «${pages.webDevelopment.url}»`, () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.webDevelopment.url}`)
  })

  expected(`underlined item «Web development»`, () => {
    browser.assert.screenshotElement(header.block.categories, 'webDevelopment selected (EU)')
  })

  step('click on a category «Business»', () => {
    browser.click(header.link.business)
  })

  expected(`added to the url «${pages.business.url}»`, () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.business.url}`)
  })

  expected(`underlined item «Business»`, () => {
    browser.assert.screenshotElement(header.block.categories, 'Business selected (EN)')
  })
})

testcase('Successful subscription to the Newsletter (Main Page)', () => {
  step(`go to the homepage ${pages.ruLocal.url}`, () => {
    browser
      .setWindowSize(1920, 3000)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  expected('under the paginator the subscription block is displayed', () => {
    browser.assert.screenshotElement(articles.block.newsletterBlock, 'newsletterForm')
  })

  step('click on the «email» field', () => {
    browser.click(articles.textField.emailNewsletterForm)
  })

  step('enter a valid email in the field «email»', () => {
    browser.setValue(articles.textField.emailNewsletterForm, '1@2.ru')
  })

  step('click on the button «Подписаться»', () => {
    browser.click(articles.button.submitNewsletterForm)
  })

  expected('type of subscribe form when successful', () => {
    browser
      .waitForElementPresent(articles.text.successNewsletterForm)
      .assert.screenshotElement(articles.block.newsletterBlock, 'newsletterForm successful main page')
  })

  step('click on the second page in the paginator', () => {
    browser.click(articles.link.pageTwo)
  })

  expected('Under the paginator the subscription block is displayed', () => {
    browser
      .waitForElementPresent(articles.block.newsletterBlock)
  })
})



