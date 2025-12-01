import h from "../../DOMutil/virtualDOM.js";

export default function TextareaFieldVDOM({
  id,
  label,
  placeholder = "",
  state = {},
  stateKey,
}) {
  const key = stateKey ?? id;
  const value = state?.[key] || "";
  const helper = state?.[`${key}Error`] || "";

  return h("div", { className: "input-post-container" }, [
    h("div", { className: "input-title" }, label),

    h("div", { className: "input-line" }, [
      h("textarea", {
        id,
        className: "createInput textareaContent post-input",
        placeholder,
        value,
        "data-field-id": key,
      }),
    ]),

    h("div", { className: "helper", id: `${id}-helper` }, helper),
  ]);
}
