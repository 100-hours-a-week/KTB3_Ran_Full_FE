import h from "../../../shared/DOMutil/virtualDOM.js";

export default function ImgButtonVDOM({
  src = "",
  alt = "",
  styleProps = {},
  buttonProps = {},
} = {}) {
  const buttonAttributes = {
    className: "imgBtn",
    style: `
            width: ${styleProps.width || 32}px;
            height: ${styleProps.height || 32}px;
            border-radius: ${styleProps.radius || 0}px;
            margin: ${styleProps.margin || 0}px;
            padding: ${styleProps.padding || 0}px;
            background: ${styleProps.background || "transparent"};
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          `,
    ...buttonProps,
  };

  return h(
    "div",
    {
      className: "imgWrapper",
      style: `
        display: flex;
        justify-content: ${styleProps.justifyContent || "flex-start"};
      `,
    },
    [
      h("button", buttonAttributes, [
        h("img", {
          src,
          alt,
        }),
      ]),
    ]
  );
}
