// PostInputFieldEffect.js
import setState, { getState } from "../../../shared/state/currentState.js";
import validatePostTitle from "../../../features/board/lib/validatePostTitle.js";
import validatePostContent from "../../../features/board/lib/validatePostContent.js";

export default function PostInputFieldEffect() {
  const inputs = document.querySelectorAll(".post-input");
  if (!inputs || inputs.length === 0) return;

  const validators = {
    title: validatePostTitle,
    content: validatePostContent,
  };

  function onBlur(e) {
    const field = e.target.dataset.fieldId; //어떤 target일까용
    const value = e.target.value;

    const validator = validators[field];
    const error = validator ? validator(value) : "";

    setState({
      [field]: value,
      [field + "Error"]: error,
    });
  }

  inputs.forEach((input) => {
    input.addEventListener("blur", onBlur);
  });

  return () => {
    inputs.forEach((input) => {
      input.removeEventListener("blur", onBlur);
    });
  };
}
