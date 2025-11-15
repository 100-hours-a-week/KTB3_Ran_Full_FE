import timestamp from "../../../shared/utils/timestamp.js";

export const boardDetailProps = (data) => ({
  id: data.id,
  title: data.title || "",
  author: data.postAuthor || "",
  createdAt: timestamp(data.createdAt) || "",
  content: data.content || "",
  likeCount: data.count.likeCount || 0,
  viewCount: data.count.viewCount || 0,
  commentCount: data.comments.length || 0,
});
