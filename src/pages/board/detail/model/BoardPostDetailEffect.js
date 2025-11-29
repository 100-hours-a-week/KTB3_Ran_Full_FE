import handlePostDetail from "../../../../features/board/model/handlePostDetail.js";
import setState, { getState } from "../../../../shared/state/currentState.js";

let updatePostId = null;

//useEffect(()=>,[postId])
function BoardPostDetailEffect(postId) {
  if (updatePostId === postId) return; //같으면 반환
  updatePostId = postId; //다르면 갱신

  let hasFetched = false;

  handlePostDetail(postId).then((data) => {
    if (hasFetched) return;

    setState((prev = {}) => ({
      post: data.postData,
      comments: data.commentsData,
      commentForm: {
        ...(prev.commentForm || {}),
        postId: data.postData?.id ?? prev.commentForm?.postId ?? null,
      },
    }));
  });
  console.log("state:", getState());
  return () => {
    hasFetched = true;
  };
}

export default BoardPostDetailEffect;
