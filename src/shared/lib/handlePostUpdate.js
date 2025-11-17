import postUpdateFetch from "../../features/board/api/postUpdateFetch.js";

async function handlePostUpdate({ dto, postId }) {
  console.log("handle:", dto);
  return postUpdateFetch({ dto, postId });
}

export default handlePostUpdate;
