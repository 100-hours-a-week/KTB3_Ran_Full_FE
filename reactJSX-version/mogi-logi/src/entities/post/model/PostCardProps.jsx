import timestamp from "../../../shared/utils/timestamp";

export const PostCardProps = (post) => ({
  postId: post.id,
  title: post.title,
  author: post.author,
  content: post.content,
  createdAt: timestamp(post.createdAt),
  commentCount: post.commentCount,
  likeCount: post.likeCount,
  viewCount: post.viewCount,
});
