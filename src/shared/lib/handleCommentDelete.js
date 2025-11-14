import main from "../../app/main.js";
import postDeleteFetch from "../../features/board/api/postDeleteFetch.js";
import commentDeleteFetch from "../../features/comment/api/commentDeleteFetch.js";
import sessionUser from "../utils/session.js";

function handleCommentDelete({ postId, props }) {
  //모달이 꺼져야됨.
  console.log(props);
  const commentId = props.commentId;
  return commentDeleteFetch({ postId, commentId });
}

export default handleCommentDelete;
