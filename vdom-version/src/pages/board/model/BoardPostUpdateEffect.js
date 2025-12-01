import validatePostTitle from "../../../features/board/lib/validatePostTitle.js";
import validatePostContent from "../../../features/board/lib/validatePostContent.js";
import setState, { getState } from "../../../shared/state/currentState.js";
import handlePostUpdate from "../../../shared/lib/handlePostUpdate.js";

export default function BoardPostUpdateEffect(props) {
  console.log("BoardPostUpdateEffect 실행됨");
  console.log(props);

  const updateBtn = document
    .getElementById("post-update-button")
    .querySelector("button");

  if (!updateBtn) return;

  // 실제 수정 API 호출
  async function onClick() {
    await handlePostUpdate({
      postId: props.id,
      dto: {
        title: getState().title,
        content: getState().content,
      },
    });
  }

  updateBtn.addEventListener("click", onClick);

  return () => {
    updateBtn.removeEventListener("click", onClick);
  };
}
