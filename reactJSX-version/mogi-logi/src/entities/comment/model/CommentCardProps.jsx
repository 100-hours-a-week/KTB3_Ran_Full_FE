export const CommentCardProps = (comment) => ({
  commentId: comment.commentId,
  author: comment.author,
  content: comment.content,
  createdAt: comment.created_at,
  postId: comment.postId,
});
