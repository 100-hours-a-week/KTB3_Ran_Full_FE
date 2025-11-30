import likeDeleteFetch from "../../../features/like/api/likeDeleteFetch.js";
import setState, { getState } from "../../../shared/state/currentState.js";

async function handleLikeDelete(postId) {
  //최신 데이터 받아오고
  const data = await likeDeleteFetch(postId);

  //상태에 반영하기
  setState({
    post: {
      ...getState().post,
      liked: data.liked,
      likeCount: data.likesCount,
    },
  });
  return data;
}

export default handleLikeDelete;
