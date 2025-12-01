import setState, { getState } from "../../state/currentState.js";
import validatePostTitle from "../../../features/board/lib/validatePostTitle.js";
import validatePostContent from "../../../features/board/lib/validatePostContent.js";

export default function PostInputFieldEffect() {
  const titleInput = document.getElementById("post-title");
  if (!titleInput) return;

  const onBlur = (e) => {
    const value = e.target.value;
    const state = getState() || {};
    const titleError = validatePostTitle(value);
    const contentValid = !validatePostContent(state.content || "");

    setState({
      title: value,
      titleError,
      canSubmit: !titleError && contentValid,
    });
  };

  titleInput.addEventListener("blur", onBlur);

  return () => {
    titleInput.removeEventListener("blur", onBlur);
  };
}
