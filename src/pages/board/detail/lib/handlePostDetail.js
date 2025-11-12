async function handlePostDetail(postId) {
  const postDetail = await post(postId);

  return postDetail.data;
}

export default handlePostDetail;
