import likeCreatFetch from "../../../features/like/api/likeCreatFetch.js";

function handleLikeCreat(postId) {
  const fetch = likeCreatFetch(postId);
  return fetch;
}

export default handleLikeCreat;
