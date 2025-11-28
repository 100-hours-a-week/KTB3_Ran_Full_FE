import setState, { getState } from "../../../shared/state/currentState.js";
import validatePostContent from "../../../features/board/lib/validatePostContent.js";

export default function TextareaFieldEffect() {
  const textareas = document.querySelectorAll("textarea[data-field-id]");
  if (!textareas.length) return;

  const onInput = (e) => {
    const field = e.target.dataset.fieldId;
    const value = e.target.value;

    setState({
      [field]: value,
    });
  };

  const onBlur = (e) => {
    const field = e.target.dataset.fieldId;
    const value = e.target.value;

    const error = validatePostContent(value) || "";

    setState({
      [field + "Error"]: error,
    });
  };

  // 이벤트 등록
  textareas.forEach((t) => {
    t.addEventListener("input", onInput);
    t.addEventListener("blur", onBlur);
  });

  // cleanup
  return () => {
    textareas.forEach((t) => {
      t.removeEventListener("input", onInput);
      t.removeEventListener("blur", onBlur);
    });
  };
}
