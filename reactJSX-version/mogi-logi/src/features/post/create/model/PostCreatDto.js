export const PostCreatDto = (props) => ({
  title: props.title,
  content: props.content,
  imgUrl: props.imageUrl ?? null,
});
