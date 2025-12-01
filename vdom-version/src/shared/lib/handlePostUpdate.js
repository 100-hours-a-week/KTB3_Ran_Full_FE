import postUpdateFetch from "../../features/board/api/postUpdateFetch.js";
import handlePostDetail from "../../features/board/model/handlePostDetail.js";
import setState, { getState } from "../state/currentState.js";
import toast from "../utils/handleToast.js";

async function handlePostUpdate({ dto, postId }) {
  console.log("handle:", postId);
  //1. 서버에 업데이트 요청
  await postUpdateFetch({ dto, postId });

  //2. 상세페이지 재요청
  //3. state에 갱신 -> dom새로 그림
  handlePostDetail(postId).then((data) => {
    setState({
      post: data.postData,
      comments: data.commentsData,
    });
  });

  //4. 토스트메시지
  toast("게시글 수정");

  //
  location.hash = `/post/get/${postId}`;
  return;
}

export default handlePostUpdate;
