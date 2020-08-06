export default (a, b) => {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false
  }

  for (const key in a) {
    if (!(key in b) || a[key] !== b[key]) {
      return false
    }
  }

  return true
}
