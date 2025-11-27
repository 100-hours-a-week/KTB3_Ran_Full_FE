import postCountGroupVDOM from "../../../pages/board/detail/ui/postCountGroup/postCountGroupVDOM.js";
import h from "../../../shared/DOMutil/virtualDOM.js";

export default function boardCardVDOM(props) {
  return h(
    "div",
    {
      className: "board-card",
      onclick: () => {
        location.hash = `/post/get/${props.id}`;
      },
    },
    [
      h("div", { className: "card-background" }, [
        h("div", { className: "card-wrapper" }, [
          // 사용자 메타
          h("div", { className: "card-meta" }, [
            h("div", {
              className: "userImg",
              style: `
                width:10%;
                background:var(--color-meta);
                aspect-ratio:1;
                border-radius:50px;
              `,
            }),

            h("div", { className: "card-meta-text" }, [
              h(
                "div",
                {
                  className: "author",
                  style: `
                    font-weight: var(--font-weight-bold);
                    font-size: var(--font-size-mtitle);
                    color: var(--color-primary);
                  `,
                },
                props.author
              ),

              h(
                "div",
                {
                  className: "createdAt",
                  style: `
                    font-size: var(--font-size-content);
                    color: var(--color-meta);
                  `,
                },
                props.createdAt
              ),
            ]),
          ]),

          // 게시글 헤더/내용
          h("div", { className: "card-header" }, [
            h(
              "div",
              {
                className: "card-title",
                style: `
                  font-size: var(--font-size-lg);
                  font-weight: var(--font-weight-bold);
                `,
              },
              props.title
            ),

            h(
              "div",
              {
                className: "card-content",
                style: `
                  color: var(--color-card-text);
                  text-align: start;
                `,
              },
              props.content
            ),
          ]),

          // 좋아요/댓글/조회수 (postCountGroup)
          h(
            "div",
            {
              style: `
                display:flex;
                justify-content: flex-end;
                margin-top: 10px;
              `,
            },
            [postCountGroupVDOM(props)]
          ),
        ]),
      ]),
    ]
  );
}
