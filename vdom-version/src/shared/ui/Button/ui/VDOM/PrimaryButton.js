import h from "../../../../DOMutil/virtualDOM.js";

function ButtonVDOM({
  id = "",
  text = "버튼",
  state = { canSubmit: false },
  styleProps = {},
  buttonProps = {},
  wrapperProps = {},
} = {}) {
  return h(
    "div",
    {
      className: "btn-wrapper",
      id,
      style: StyleWrapper(styleProps),
      ...wrapperProps,
    },
    [
      h(
        "button",
        {
          className: state.canSubmit ? "primaryBtn" : "primaryBtn disabled",
          disabled: !state.canSubmit,
          style: StyleButton(styleProps),
          ...buttonProps,
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
