import h from "../../../../shared/DOMutil/virtualDOM.js";

export default function postContentVDOM({ content }) {
  return h("div", { className: "post-content-wrapper" }, [
    // 스타일
    h(
      "style",
      {},
      `
      .post-content{
        min-height: 60px;
        text-align: start;
        word-break: break-all;
        font-size: var(--font-size-base);
      }
    `
    ),

    // 내용
    h("div", { className: "post-content" }, content),
  ]);
}
