export const PostHeaderProps = (post) => ({
  title: post.title,
  author: post.postAuthor,
  date: post.createdAt,
  postId: post.id,
});
