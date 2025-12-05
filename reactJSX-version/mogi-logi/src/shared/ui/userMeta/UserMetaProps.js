import Timestamp from "../../utils/timestamp.jsx";

export const UserMetaProps = (props) => ({
  author: props.author,
  createdAt: Timestamp(props.createdAt),
});
