const pages = require('../data/pages')

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
