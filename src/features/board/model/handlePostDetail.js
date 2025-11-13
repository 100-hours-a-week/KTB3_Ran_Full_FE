import postDetail from "../api/postDetailFetch.js";

async function handlePostDetail(postId) {
  const postDetailPage = await postDetail(postId);

  return postDetailPage;
}

export default handlePostDetail;
