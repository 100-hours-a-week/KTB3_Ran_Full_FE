import h from "../../../../DOMutil/virtualDOM.js";

function ButtonVDOM({
  text = "버튼",
  onClick = null,
  state = "",
  styleProps = {},
} = {}) {
  console.log("state.canSubmit:", state.canSubmit);
  return h(
    "div",
    { className: "btn-wrapper", style: StyleWrapper(styleProps) },
    [
      h(
        "button",
        {
          className: state.canSubmit ? "primaryBtn" : "primaryBtn disabled",
          disabled: !state.canSubmit,
          onclick: onClick,
          style: StyleButton(styleProps),
        },
        text
      ),
    ]
  );
}

function StyleWrapper(styleProps) {
  return `
    display: flex;
    justify-content: ${styleProps.justifyContent};
  `;
}

function StyleButton(styleProps) {
  return `
    width: ${styleProps.width}%;
    border-radius: ${styleProps.radius}px;
    margin: ${styleProps.margin}px;
    padding: ${styleProps.padding}px;
    background: ${styleProps.background};
    font-size: ${styleProps.fontSize}px;
    font-weight: ${styleProps.fontWeight};
  `;
}

export default ButtonVDOM;
