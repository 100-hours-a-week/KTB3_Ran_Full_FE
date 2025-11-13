export const postCreatDto = (props) => ({
  title: props.title,
  content: props.content,
  imageUrl: props.imageUrl ?? null,
});
