import postDeleteFetch from "../../features/board/api/postDeleteFetch.js";
import commentDeleteFetch from "../../features/comment/api/commentDeleteFetch.js";
import sessionUser from "../utils/session.js";

function handleCommentDelete({ postId, commentId }) {
  console.log(postId);
  return commentDeleteFetch({ postId, commentId });
}

export default handleCommentDelete;
