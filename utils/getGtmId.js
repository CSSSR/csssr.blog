export default (language) => {
  if (!process.env.IS_PRODUCTION) {
    return 'GTM-W23KLZB'
  }
  if (language === 'en') {
    return 'GTM-TDG7X5G'
  }
  return 'GTM-K67FHB5'
}
