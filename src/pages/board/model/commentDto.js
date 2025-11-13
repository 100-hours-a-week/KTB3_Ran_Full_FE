export const commentDto = (data) => ({
  id: data.commentId,
  content: data.content || "",
  author: data.author || "",
  created_at: data.created_at || "",
});
