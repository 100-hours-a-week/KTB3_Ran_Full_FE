import validatePostTitle from "../../../features/board/lib/validatePostTitle.js";
import validatePostContent from "../../../features/board/lib/validatePostContent.js";
import setState, { getState } from "../../../shared/state/currentState.js";
import handlePostUpdate from "../../../shared/lib/handlePostUpdate.js";

export default function BoardPostUpdateEffect(props) {
  console.log("BoardPostUpdateEffect 실행됨");

  const titleField = document.getElementById("post-title");
  const contentField = document.getElementById("post-content");

  const updateBtn = document
    .getElementById("post-update-button")
    ?.querySelector("button");

  if (!titleField || !contentField || !updateBtn) return;

  // 초기 state 반영 (기존 게시글 로드)
  setState({
    title: props?.title ?? "",
    content: props?.content ?? "",
    titleError: "",
    contentError: "",
    canSubmit: true,
  });

  // 유효성 검사 및 state 업데이트
  function updateState() {
    const state = getState();
    const titleError = validatePostTitle(state.title);
    const contentError = validatePostContent(state.content);

    setState({
      ...state,
      titleError,
      contentError,
      canSubmit: !titleError && !contentError,
    });
  }

  // blur 이벤트로 입력값 반영
  const onTitleBlur = (e) => {
    setState({ ...getState(), title: e.target.value });
    updateState();
  };

  const onContentBlur = (e) => {
    setState({ ...getState(), content: e.target.value });
    updateState();
  };

  // 실제 수정 API 호출
  async function onClick() {
    await handlePostUpdate({
      postId: props.postId,
      dto: {
        title: getState().title,
        content: getState().content,
      },
    });
  }

  titleField.addEventListener("field-blur", onTitleBlur);
  contentField.addEventListener("field-blur", onContentBlur);
  updateBtn.addEventListener("click", onClick);

  return () => {
    titleField.removeEventListener("field-blur", onTitleBlur);
    contentField.removeEventListener("field-blur", onContentBlur);
    updateBtn.removeEventListener("click", onClick);
  };
}
