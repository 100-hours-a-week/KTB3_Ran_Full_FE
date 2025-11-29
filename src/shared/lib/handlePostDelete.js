import postDeleteFetch from "../../features/board/api/postDeleteFetch.js";

function handlePostDelete(postId) {
  console.log("handlePost");
  const res = postDeleteFetch(postId);

  return res;
}

export default handlePostDelete;
