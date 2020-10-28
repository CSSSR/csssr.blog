testcase('Переход на страницу авторизации с главной', () => {
  step('переходим на github.com', () => {
    browser.url('https://github.com')
  })

  expected('в хедере есть ссылка для входа', () => {
    browser.expect.element('header [href="/login"]').text.to.contain('Sign in')
  })

  step('кликаем на ссылку для входа', () => {
    browser.click('header [href="/login"]')
  })

  expected('перешли на страницу авторизации', () => {
    browser.expect.url().to.equal('https://github.com/login')
  })
})
