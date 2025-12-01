import setState, { getState } from "../../state/currentState.js";
import validatePostContent from "../../../features/board/lib/validatePostContent.js";
import validatePostTitle from "../../../features/board/lib/validatePostTitle.js";

export default function TextareaFieldEffect() {
  const contentInput = document.getElementById("post-content");
  if (!contentInput) return;

  const onBlur = (e) => {
    const value = e.target.value;
    const state = getState() || {};
    const contentError = validatePostContent(value);
    const titleValid = !validatePostTitle(state.title || "");

    setState({
      content: value,
      contentError,
      canSubmit: !contentError && titleValid,
    });
  };

  contentInput.addEventListener("blur", onBlur);

  return () => {
    contentInput.removeEventListener("blur", onBlur);
  };
}
