module.exports = {
  block: {
    post: '[data-testid="Post:block:header"]',
    fullPage: '[data-testid="Layout:block:main"]',
    newsletterForm: '#main > article > div > div.post-newsletter.hidden_mobile.css-1qf5xc9',
    newsletterBlock: '[data-testid="Newsletter:block"]',
  },
  link: {
    culture: '[data-testid="Post:link.category.culture"]',
    business: '[data-testid="Post:link.category.business"]',
    markdown: '[id="commento-markdown-button-root"]',
    privacyPolicy: '[data-testid="NewsletterForm:link:privacyPolicy"]',
    pageTwo: '[data-testid="Pagination:link:pageNumber.2"]',
  },
  text: {
    titleInCenterPage: '[id="---"]',
    successNewsletterForm: '[data-testid="NewsletterForm:text:success"]',
    titleNewsletterForm: '#main > article > div > div.post-newsletter.hidden_mobile.css-1qf5xc9 > div.container > h2',
  },
  textField: {
    emailNewsletterForm: '[data-testid="NewsletterForm:field:email"]',
  },
  button: {
    submitNewsletterForm: '[data-testid="NewsletterForm:button:submit"]'
  }
}
