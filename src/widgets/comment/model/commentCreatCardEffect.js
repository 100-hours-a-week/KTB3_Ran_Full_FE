import { creatCommentDto } from "../../../features/comment/model/creatCommentDto.js";
import handleCreatComment from "../../../pages/board/detail/lib/handleCreatComment.js";
import handleCommentUpdate from "../../../pages/board/detail/lib/handleCommentUpdate.js";
import setState, { getState } from "../../../shared/state/currentState.js";

export default function commentCreatCardEffect() {
  console.log("commentCreatCardEffect 등록됨");
  const btnWrapper = document.getElementById("comment-create-btn");
  if (!btnWrapper) return;

  const state = getState() || {};
  const form = state.commentForm || {};
  const resolvedPostId = form.postId ?? state.post?.id ?? null;
  const btn = btnWrapper.querySelector("button");
  const textarea = document.getElementById("comment-textarea");

  if (!textarea || !btn) return console.log("textarea, btn X");

  // // 입력 변화 → state 갱신
  // function onInput(e) {
  //   const value = e.target.value;

  //   setState((prev) => ({
  //     ...prev,
  //     commentForm: {
  //       ...prev.commentForm,
  //       content: value,
  //     },
  //   }));
  // }

  //textarea 버튼 활성화 감지
  function onInput() {
    const value = textarea.value.trim();

    if (value.length === 0) {
      btn.disabled = true;
      btn.classList.add("disabled");
    } else {
      btn.disabled = false;
      btn.classList.remove("disabled");
    }
  }

  onInput();

  //댓글 생성 버튼 클릭
  async function onClick() {
    const content = textarea.value.trim();
    if (!content) return;

    const dto = creatCommentDto({ content });

    if (form.mode === "create") {
      await handleCreatComment({ dto, postId: resolvedPostId });
    } else if (form.mode === "edit") {
      // edit 모드
      await handleCommentUpdate({
        dto,
        postId: resolvedPostId,
        commentId: form.commentId,
      });
    }

    // 입력 초기화
    setState((prev) => ({
      ...prev,
      commentForm: {
        ...prev.commentForm,
        mode: "create",
        content: "",
        commentId: null,
        postId: prev.commentForm?.postId ?? resolvedPostId,
      },
    }));
  }

  textarea.addEventListener("input", onInput);
  btn.addEventListener("click", onClick);

  // cleanup
  return () => {
    textarea.removeEventListener("input", onInput);
    btn.removeEventListener("click", onClick);
  };
}
