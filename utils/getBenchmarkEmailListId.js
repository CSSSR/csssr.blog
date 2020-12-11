export default () => {
  if (process.env.IS_PRODUCTION) {
    return '18030400'
  }
  return '17171975'
}
