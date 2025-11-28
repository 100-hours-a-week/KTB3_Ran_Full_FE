import h from "../../../../../shared/DOMutil/virtualDOM.js";

export default function PostCountGroupVDOM(props) {
  console.log(props);
  return h("div", { className: "post-count-group" }, [
    h(
      "div",
      {
        className: `count-content like ${props.liked ? "enabled" : ""}`,
        "data-role": "like-wrapper",
        "data-post-id": props.postId,
      },
      [
        h("img", {
          className: "like-icon",
          "data-role": "like-icon",
          src: props.liked
            ? "public/icon/liked_icon.svg"
            : "public/icon/unliked_icon.svg",
        }),
        h(
          "div",
          { className: "count", "data-role": "like-count" },
          `${props.likeCount}`
        ),
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
  ]);
}
