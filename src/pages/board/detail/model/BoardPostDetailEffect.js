import handlePostDetail from "../../../../features/board/model/handlePostDetail.js";
import setState, { getState } from "../../../../shared/state/currentState.js";

function BoardPostDetailEffect(postId) {
  const state = getState();
  const numId = Number(postId);

  //받아올때까지 return
  if (state?.post?.id === numId) return;

  let aborted = false;

  handlePostDetail(postId).then((data) => {
    if (aborted) return;

    setState((prev) => ({
      ...prev,
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
    aborted = true;
  };
}

export default BoardPostDetailEffect;
