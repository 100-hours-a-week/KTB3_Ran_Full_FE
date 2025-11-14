export const commendProps = (commend) => ({
  commentId: commend.id,
  content: commend.content,
  //   authorId: commend.authorId,
  author: commend.author,
  created_at: commend.created_at,
});
