export default () => {
  if (process.env.IS_PRODUCTION === 'TRUE') {
    return '18030400'
  }
  return '17171975'
}
