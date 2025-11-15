import likeDeleteFetch from "../../../features/like/api/likeDeleteFetch.js";

function handleLikeDelete(postId) {
  const fetch = likeDeleteFetch(postId);
  return fetch;
}

export default handleLikeDelete;
