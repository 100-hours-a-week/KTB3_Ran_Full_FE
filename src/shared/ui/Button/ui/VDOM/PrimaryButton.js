import h from "../../../../DOMutil/virtualDOM.js";

function ButtonVDOM({ text = "버튼", onClick = null, styleProps = {} } = {}) {
  return h(
    "div",
    { className: "btn-wrapper", style: StyleWrapper(styleProps) },
    [
      h(
        "button",
        {
          className: "primaryBtn",
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
    justify-content: ${styleProps.justifyContent || "flex-end"};
  `;
}

function StyleButton(styleProps) {
  return `
    width: ${styleProps.width || 100}%;
    border-radius: ${styleProps.radius || 8}px;
    margin: ${styleProps.margin || 0}px;
    padding: ${styleProps.padding || 12}px;
    background: ${styleProps.background || "var(--color-primary)"};
    font-size: ${styleProps.fontSize || 16}px;
    font-weight: ${styleProps.fontWeight || "bold"};
  `;
}

export default ButtonVDOM;
