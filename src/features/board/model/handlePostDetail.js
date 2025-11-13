import postDetail from "../api/postDetailFetch.js";

async function handlePostDetail(postId) {
  const postDetailPage = await postDetail(postId);
  console.log(postDetailPage);

  return postDetailPage;
}

export default handlePostDetail;
