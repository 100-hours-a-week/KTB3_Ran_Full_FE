import h from "../../DOMutil/virtualDOM.js";

export function InputField({
  id = "",
  label = "",
  value = "",
  type = "text",
  placeholder = "",
  helperText = "",
}) {
  return h("div", { className: "input-field-container" }, [
    h("div", { className: "title" }, [label]),
    h("div", { className: "inputWrapper" }, [
      h("input", {
        id,
        type,
        value,
        placeholder,
      }),
    ]),
    h("div", { className: "helper" }, [helperText]),
  ]);
}
