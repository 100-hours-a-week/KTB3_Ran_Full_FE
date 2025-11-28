import validatePostTitle from "../../../../features/board/lib/validatePostTitle.js";
import validatePostContent from "../../../../features/board/lib/validatePostContent.js";
import setState, { getState } from "../../../../shared/state/currentState.js";
import handlePostCreat from "../../../../features/board/model/handlePostCreat.js";

export default function BoardPostCreatEffect() {
  const root = document.querySelector(".board-post-creat-page");
  if (!root) return;

  const titleInput = root.querySelector("#post-title");
  const contentInput = root.querySelector("#post-content");
  const createButton = root.querySelector("#post-create-button button");

  if (!titleInput || !contentInput || !createButton) return;

  const updateTitle = (value) => {
    const state = getState() || {};
    const titleError = validatePostTitle(value);
    const contentValid = !validatePostContent(state.content || "");

    setState({
      title: value,
      titleError,
      canSubmit: !titleError && contentValid,
    });
  };

  const updateContent = (value) => {
    const state = getState() || {};
    const contentError = validatePostContent(value);
    const titleValid = !validatePostTitle(state.title || "");

    setState({
      content: value,
      contentError,
      canSubmit: !contentError && titleValid,
    });
  };

  const onTitleBlur = (e) => updateTitle(e.target.value);
  const onContentBlur = (e) => updateContent(e.target.value);

  const onClick = async () => {
    const state = getState();
    await handlePostCreat();
  };

  titleInput.addEventListener("blur", onTitleBlur);
  contentInput.addEventListener("blur", onContentBlur);
  createButton.addEventListener("click", onClick);

  return () => {
    titleInput.removeEventListener("blur", onTitleBlur);
    contentInput.removeEventListener("blur", onContentBlur);
    createButton.removeEventListener("click", onClick);
  };
}
