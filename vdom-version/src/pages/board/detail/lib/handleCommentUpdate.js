import commentUpdateFetch from "../../../../features/comment/api/commentUpdateFetch.js";
import handlePostDetail from "../../../../features/board/model/handlePostDetail.js";
import setState from "../../../../shared/state/currentState.js";

async function handleCommentUpdate({ dto, postId, commentId }) {
  if (!commentId) return;

  await commentUpdateFetch({ dto, postId, commentId });

  handlePostDetail(postId).then((data) =>
    setState({
      post: data.postData,
      comments: data.commentsData,
    })
  );
  return;
}

export default handleCommentUpdate;
