import handleLikeCreat from "../../../pages/like/lib/handleLikeCreat.js";
import handleLikeDelete from "../../../pages/like/lib/handleLikeDelete.js";
import { getState } from "../../../shared/state/currentState.js";

function likeCreateDeleteTogle() {
  //1. DOM 요소 찾기

  const like = document.getElementById("likeCount");
  if (!like) return;

  const likeImg = like.querySelector(".like-icon");
  if (!likeImg) return;

  console.log("likeTogle");

  //아이콘 렌더링 함수
  function updateLikeIcon() {
    const state = getState();
    const post = state.post; // 상세 페이지니까 state.post 사용

    if (!post) return; //post 없으면 가라

    likeImg.src = post.liked
      ? "public/icon/liked_icon.svg"
      : "public/icon/unliked_icon.svg";
  }

  async function onClick() {
    const postId = Number(like.dataset.postId);
    const post = getState().post;

    if (!post) return;

    if (post.liked) {
      await handleLikeDelete(postId);
    } else {
      await handleLikeCreat(postId);
    }

    //클릭했으니상태가 바뀜
    updateLikeIcon();
  }

  //mount시 초기 렌더링
  updateLikeIcon();

  like.addEventListener("click", onClick);

  //클린업
  return () => {
    like.removeEventListener("click", onClick);
  };
}

export default likeCreateDeleteTogle;
