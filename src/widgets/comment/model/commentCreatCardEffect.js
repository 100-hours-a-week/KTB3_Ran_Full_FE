import { creatCommentDto } from "../../../features/comment/model/creatCommentDto.js";
import handleCreatComment from "../../../pages/board/detail/lib/handleCreatComment.js";

export default function commentCreatCardEffect() {
  console.log("commentCreatCardEffect 등록됨");
  const btnWrapper = document.getElementById("comment-create-btn");
  if (!btnWrapper) return;

  const btn = btnWrapper.querySelector("button");
  const textarea = document.getElementById("comment-textarea");

  if (!textarea || !btn) return console.log("textarea, btn X");

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
    const dto = creatCommentDto({ content });
    const postId = btn.dataset.postId;

    //handle
    await handleCreatComment({ dto, postId });

    textarea.value = "";
    onInput();
  }

  textarea.addEventListener("input", onInput);
  btn.addEventListener("click", onClick);

  // cleanup
  return () => {
    textarea.removeEventListener("input", onInput);
    btn.removeEventListener("click", onClick);
  };
}
