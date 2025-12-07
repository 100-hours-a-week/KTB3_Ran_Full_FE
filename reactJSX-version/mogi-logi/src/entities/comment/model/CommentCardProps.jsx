import Timestamp from "../../../shared/utils/timestamp.js";

export const CommentCardProps = (comment) => ({
  commentId: comment.commentId,
  author: comment.author,
  content: comment.content,
  createdAt: Timestamp(comment.created_at),
  postId: comment.postId,
});
