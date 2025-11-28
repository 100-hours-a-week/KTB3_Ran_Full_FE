import handleLikeCreat from "../../../pages/like/lib/handleLikeCreat.js";
import handleLikeDelete from "../../../pages/like/lib/handleLikeDelete.js";
import setState, { getState } from "../../../shared/state/currentState.js";

function likeCreateDeleteTogle() {
  //1. DOM 요소 찾기

  const wrapper = document.querySelector('[data-role="like-wrapper"]');
  if (!wrapper) return;

  const icon = wrapper.querySelector('[data-role="like-icon"]');
  const countEl = wrapper.querySelector('[data-role="like-count"]');
  const postId = wrapper.dataset.postId;
  console.log(postId);

  //아이콘 렌더링 함수
  function updateLikeIcon() {
    const state = getState();
    const post = state?.post; // 상세 페이지니까 state.post 사용
    if (!post) return; //post 없으면 가라

    icon.src = post.liked
      ? "public/icon/liked_icon.svg"
      : "public/icon/unliked_icon.svg";

    countEl.textContent = post.likeCount;
  }

  async function onClick() {
    const state = getState();
    const post = state?.post;
    if (!post) return;

    // console.log("post.liked", post.liked);

    if (!post.liked) {
      await handleLikeCreat(postId);
    } else {
      await handleLikeDelete(postId);
    }

    updateLikeIcon();
  }

  //mount시 초기 렌더링
  updateLikeIcon();

  wrapper.addEventListener("click", onClick);

  //클린업
  return () => {
    wrapper.removeEventListener("click", onClick);
  };
}

export default likeCreateDeleteTogle;
