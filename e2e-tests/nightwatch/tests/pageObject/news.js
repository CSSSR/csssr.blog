module.exports = {
  block: {
    newsList: '[data-testid="NewsList:block"]',
    pagination: '[data-testid="Pagination:block"]',
    lastNews: '[data-testid="NewsList:link:episode[11]"]',
    nonexistingNews: '[data-testid="NewsList:link:episode[12]"]',
    fullPage: '[data-testid="Layout:block:main"]',
    audio: '[data-testid="Post:link:newsAudio"]',
  },
  text: {
    title: '[data-testid="News:block:title"]',
    numberFistNews: '[data-testid="NewsList:link:episode[0]"] span',
    numberSecondNews: '[data-testid="NewsList:link:episode[1]"] span',
  },
  link: {
    numberOfPage: '[data-testid="Pagination:link:pageNumber.2"]',
  }
}
