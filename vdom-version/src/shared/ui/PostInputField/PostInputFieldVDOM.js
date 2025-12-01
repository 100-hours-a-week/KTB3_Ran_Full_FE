import h from "../../DOMutil/virtualDOM.js";

export function PostInputFieldVDOM({
  id,
  label,
  type = "text",
  state = {},
  stateKey,
}) {
  const key = stateKey ?? id;
  const value = state?.[key] ?? "";
  const helper = state?.[`${key}Error`] ?? "";

  return h("div", { className: "input-post-container" }, [
    h("label", { className: "input-title", for: id }, label),
    h("div", { className: "input-line" }, [
      h("input", {
        id,
        className: "createInput post-input",
        type,
        value,
        "data-field-id": key,
      }),
    ]),
    h("div", { className: "helper", id: `${id}-helper` }, helper),
  ]);
}

export default PostInputFieldVDOM;
