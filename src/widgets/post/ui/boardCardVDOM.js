import PostCountGroupVDOM from "../../../pages/board/detail/ui/postCountGroup/postCountGroupVDOM.js";
import h from "../../../shared/DOMutil/virtualDOM.js";
import timestamp from "../../../shared/utils/timestamp.js";

function BoardCardVDOM(props) {
  return h(
    "div",
    { className: "board-card", postId: props.id },
    h("div", { className: "card-background" }, [
      h("div", { className: "card-wrapper" }, [
        h("div", { className: "card-meta" }, [
          h("div", { className: "userImg" }),
          h("div", { className: "card-meta-text" }, [
            h("div", { className: "author" }, props.author),
            h("div", { className: "createdAt" }, timestamp(props.createdAt)),
          ]),
        ]),

        h("div", { className: "card-header" }, [
          h("div", { className: "card-title" }, props.title),
          h("div", { className: "card-content" }, props.content),
        ]),

        // 카운트 그룹
        h(
          "div",
          {
            className: "log",
          },
          PostCountGroupVDOM(props)
        ),
      ]),
    ])
  );
}

export default BoardCardVDOM;
