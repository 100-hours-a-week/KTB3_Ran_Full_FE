import Timestamp from "../../../shared/utils/timestamp.jsx";

export const PostHeaderProps = (post) => ({
  title: post.title,
  author: post.postAuthor,
  createdAt: Timestamp(post.createdAt),
  postId: post.id,
  content: post.content,
});
