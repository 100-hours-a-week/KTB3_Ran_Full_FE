export default function BoardPostCreatEffect() {
  const fields = document.querySelectorAll(".post-input");
  const createBtn = document
    .getElementById("post-create-button")
    ?.querySelector("button");

  if (fields.length === 0 || !createBtn) return;

  function validateAll() {
    const state = getState();
    const titleError = validatePostTitle(state.title);
    const contentError = validatePostContent(state.content);

    setState({
      titleError,
      contentError,
      canSubmit: !titleError && !contentError,
    });
  }

  const onBlur = (e) => {
    const key = e.target.dataset.fieldId;
    setState({ [key]: e.target.value });
    validateAll();
  };

  const onClick = async () => {
    await handlePostCreat();
  };

  fields.forEach((f) => f.addEventListener("blur", onBlur));
  createBtn.addEventListener("click", onClick);

  return () => {
    fields.forEach((f) => f.removeEventListener("blur", onBlur));
    createBtn.removeEventListener("click", onClick);
  };
}
