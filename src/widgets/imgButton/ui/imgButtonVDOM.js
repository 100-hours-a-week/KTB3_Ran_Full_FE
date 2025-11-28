import h from "../../../shared/DOMutil/virtualDOM.js";

export default function ImgButtonVDOM({
  id = "", //각각의 다른 인스턴스로분리하기 위해서
  src = "",
  alt = "",
  styleProps = {},
} = {}) {
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
      h(
        "button",
        {
          className: "imgBtn",
          id: `${id}`,
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
        },
        [
          h("img", {
            src,
            alt,
          }),
        ]
      ),
    ]
  );
}
