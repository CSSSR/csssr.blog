export default (posts) =>
  posts.reduce(
    (memo, post) => {
      const isCategoryAlreadyInMemo = memo.find((category) => category === post.tag.toLowerCase())

      if (isCategoryAlreadyInMemo) {
        return memo
      }

      return memo.concat(post.tag.toLowerCase())
    },
    ['all'],
  )
