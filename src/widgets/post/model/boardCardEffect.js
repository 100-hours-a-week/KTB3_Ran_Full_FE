import { navigateTo } from "../../../shared/router/Router";

function boardCardEffect() {
  console.log("boardCardEffect 실행됨");

  function onClick(e) {
    //해당 요소의 부모가 .board-card를 찾는
    const card = e.target.closest(".board-card");
    if (!card) return;

    const postId = card.postId;
    if (!postId) return;

    navigateTo(`/post/get/${postId}`);
  }

  document.addEventListener("click", onClick);

  return () => {
    document.removeEventListener("click", onClick);
  };
}

export default boardCardEffect;
