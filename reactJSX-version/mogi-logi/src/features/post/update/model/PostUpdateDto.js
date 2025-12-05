export const PostUpdateDto = (data) => ({
  title: data.title,
  content: data.content,
  imageUrl: data.imageUrl ?? null,
});
