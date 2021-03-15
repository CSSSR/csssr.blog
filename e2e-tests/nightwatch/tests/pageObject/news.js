module.exports = {
  block: {
    newsList: '#main > div.css-1sf3nef-Grid > ul',
    pagination: '[data-testid="Pagination:block"]',
    lastNews: '#main > div.css-1sf3nef-Grid > ul > li:nth-child(12)',
    unnecessaryNews: '#main > div.css-1sf3nef-Grid > ul > li:nth-child(13)',
    fullPage: '[data-testid="Layout:block:main"]',
    audio: '[data-testid="Post:link:newsAudio"]',
  },
  text: {
    title: '#main > div.css-1sf3nef-Grid > h1',
    numberFistNews: '#main > div.css-1sf3nef-Grid > ul > li.news-item.first > a > div > span.news-item-number',
    numberSecondNews: '#main > div.css-1sf3nef-Grid > ul > li:nth-child(2) > a > div > span.news-item-number',
  },
  link: {
    numberOfPage: '[data-testid="Pagination:link:pageNumber.2"]',
  }
}
