import { creatCommentDto } from "../../../features/comment/model/creatCommentDto.js";
import handleCreatComment from "../../../pages/board/detail/lib/handleCreatComment.js";

export default function commentCreatCardEffect() {
    const textarea = document.querySelector("#comment-textarea");
    const btn = document.querySelector("#comment-create-btn button");

    if (!textarea || !btn) return;

    // 1) textarea 입력 시 버튼 활성화
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

    textarea.addEventListener("input", onInput);

    // 초기 UI 상태 동기화
    onInput();

    // 2) 버튼 클릭 → 댓글 등록
    async function onClick() {
        const content = textarea.value.trim();
        if (content === "") return;

        const dto = creatCommentDto({ content });

        const postId = btn.dataset.postId;
        await handleCreatComment({ postId, dto });

        textarea.value = "";
        onInput(); // 초기화 후 다시 버튼 상태 갱신
    }

    btn.addEventListener("click", onClick);

    // cleanup
    return () => {
        textarea.removeEventListener("input", onInput);
        btn.removeEventListener("click", onClick);
    };
}
