export const postHeaderProps = (props) => ({
  postId: props.id,
  title: props.title,
  author: props.author,
  date: props.createdAt,
  content: props.content,
});
