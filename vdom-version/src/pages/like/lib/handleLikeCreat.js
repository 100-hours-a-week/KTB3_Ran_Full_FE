import likeCreatFetch from "../../../features/like/api/likeCreatFetch.js";
import setState, { getState } from "../../../shared/state/currentState.js";

async function handleLikeCreat(postId) {
  const data = await likeCreatFetch(postId);

  setState({
    post: {
      ...getState().post,
      liked: data.liked,
      likeCount: data.likesCount,
    },
  });

  return data;
}

export default handleLikeCreat;
