import timestamp from "../../../shared/utils/timestamp.js";

export const boardPostDataDto = (data) => ({
  id: data.id,
  title: data.title || "",
  content: data.content || "",
  author: data.author || "",
  imgUrl: data.imgUrl || "",
  createAt: timestamp(data.createdAt) || "",
  likeCount: data.likeCount || 0,
  viewCount: data.viewCount || 0,
  commentCount: data.commentCount || 0,
});
