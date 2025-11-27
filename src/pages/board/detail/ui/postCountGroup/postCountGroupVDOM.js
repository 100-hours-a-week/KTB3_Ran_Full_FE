import h from "../../../../../shared/DOMutil/virtualDOM.js";

export default function PostCountGroupVDOM(props) {
  console.log(props);
  return h(
    "div",
    { className: "post-count-group", id: `post-count-${props.id}` },
    [
      h(
        "div",
        {
          className: `count-content like ${props.liked ? "enabled" : ""}`,
          postId: props.id,
        },
        [
          h("img", {
            src: props.liked
              ? "public/icon/liked_icon.svg"
              : "public/icon/unliked_icon.svg",
            className: "like-icon",
          }),
          h("div", { className: "count" }, `${props.likeCount}`),
        ]
      ),

      h("div", { className: "count-content" }, [
        h("img", {
          src: "public/icon/comment_icon.svg",
        }),
        h("div", null, `${props.commentCount}`),
      ]),

      h("div", { className: "count-content" }, [
        h("img", {
          src: "public/icon/view_icon.svg",
        }),
        h("div", null, `${props.viewCount}`),
      ]),
    ]
  );
}
