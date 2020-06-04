console.log('gtm', process.env.IS_PRODUCTION)

export default () => {
  if (process.env.IS_PRODUCTION) {
    return 'GTM-TDG7X5G'
  }
  return 'GTM-W23KLZB'
}
