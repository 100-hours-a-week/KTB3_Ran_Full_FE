export const PostUpdateDto = (data) => ({
  title: data.title,
  content: data.content,
  imgUrl: data.imageUrl ?? null,
});
