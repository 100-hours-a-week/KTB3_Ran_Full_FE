import h from "../../DOMutil/virtualDOM.js";

function TitleVDOM({ text = "제목", styleProps = {} }) {
  return h(
    "div",
    {},
    h("div", {
      className: "title",
      style: `${styleProps.padding ? `padding:${styleProps.padding}px;` : ""}
    ${styleProps.fontWeight ? `font-weight:${styleProps.fontWeight};` : ""}
    ${styleProps.color ? `color: ${styleProps.color};` : ""}
    ${styleProps.fontSize ? `font-size: ${styleProps.fontSize};` : ""}
    `,
      innerHTML: text,
    })
  );
}

export default TitleVDOM;
