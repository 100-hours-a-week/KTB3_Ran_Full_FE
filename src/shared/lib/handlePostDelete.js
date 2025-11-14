import postDeleteFetch from "../../features/board/api/postDeleteFetch.js";

function handlePostDelete(postId) {
  //리렌더링 필요

  //모달이 꺼져야됨.
  return postDeleteFetch(postId);
}

export default handlePostDelete;
