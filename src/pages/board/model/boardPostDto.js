export const boardPostDataDto = (data) => ({
  id: data.id,
  title: data.title || "",
  author: data.author || "",
  imgUrl: data.imgUrl || "",
  createAt: data.createdAt || "",
  likeCount: data.likeCount || 0,
  viewCount: data.viewCount || 0,
  commentCount: data.commentCount || 0,
});
