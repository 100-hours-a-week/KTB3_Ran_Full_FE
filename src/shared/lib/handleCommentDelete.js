import postDeleteFetch from "../../features/board/api/postDeleteFetch.js";
import postDetail from "../../features/board/api/postDetailFetch.js";
import handlePostDetail from "../../features/board/model/handlePostDetail.js";
import commentDeleteFetch from "../../features/comment/api/commentDeleteFetch.js";
import setState, { getState } from "../state/currentState.js";
import toast from "../utils/handleToast.js";
import sessionUser from "../utils/session.js";

async function handleCommentDelete({ postId, commentId }) {
  //1. 서버에 삭제 요청
  await commentDeleteFetch({ postId, commentId });

  //2. 최신 댓글 리스트 다시 요청
  //3. 상태 갱신
  const prev = getState();
  handlePostDetail(postId).then((data) => {
    setState({
      ...prev,
      comments: data.commentsData,
    });
  });

  toast("댓글 삭제");
  return;
}

export default handleCommentDelete;
