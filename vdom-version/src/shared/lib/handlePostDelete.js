import postDeleteFetch from "../../features/board/api/postDeleteFetch.js";
import toast from "../utils/handleToast.js";

async function handlePostDelete(postId) {
  try {
    await postDeleteFetch(postId);
    toast("게시글 삭제");
    location.hash = "/home";
  } catch (error) {
    console.error("게시글 삭제 오류:", error);
    toast("삭제 실패");
  }
}

export default handlePostDelete;
