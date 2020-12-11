export default () => {
  if (!process.env.IS_PRODUCTION) {
    return '17171975'
  }
  return '18030400'
}
