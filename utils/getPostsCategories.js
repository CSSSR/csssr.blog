export default (posts) =>
  Object.keys(
    posts.reduce(
      (memo, post) => {
        memo[post.tag.toLowerCase()] = true

        return memo
      },
      {
        all: true,
      },
    ),
  )
