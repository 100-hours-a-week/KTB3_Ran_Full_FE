import timestamp from "../../../shared/utils/timestamp.js";

export const commentDto = (data) => ({
  id: data.commentId,
  content: data.content || "",
  author: data.author || "",
  created_at: timestamp(data.created_at) || "",
});
