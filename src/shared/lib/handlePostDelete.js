import postDeleteFetch from "../../features/board/api/postDeleteFetch.js";
import toast from "../utils/handleToast.js";

function handlePostDelete(postId) {
  const res = postDeleteFetch(postId);
  if (res) toast("게시글 삭제");

  return res;
}

export default handlePostDelete;
