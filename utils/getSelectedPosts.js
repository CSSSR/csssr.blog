export default (posts, allPosts) => posts.map((slug) => allPosts.find((post) => post.slug === slug))
