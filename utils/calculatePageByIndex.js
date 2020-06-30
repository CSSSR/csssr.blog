export default (index) => {
  const postsPerPage = 8

  return (index > 0 ? Math.ceil(index / postsPerPage) : 1).toString()
}
