import timestamp from "../../../../shared/utils/timestamp.js";

export const postHeaderProps = (props) => ({
  postId: props.id,
  title: props.title,
  author: props.author,
  date: timestamp(props.createdAt),
  content: props.content,
});
