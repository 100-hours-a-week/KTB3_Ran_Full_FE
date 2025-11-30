import postContentVDOM from "./postContentVDOM.js";
import postCountGroupVDOM from "./postCountGroup/postCountGroupVDOM.js";
import commentCardVDOM from "../../../../widgets/comment/ui/commentCardVDOM.js";
import commentCreatCardVDOM from "../../../../widgets/comment/ui/commentCreatCardVDOM.js";

import { commendProps } from "../../../../widgets/comment/model/commendProps.js";
import { postHeaderProps } from "../model/postHeaderProps.js";
import { postContentProps } from "../model/postContentProps.js";
import { postCountGroupProps } from "../model/postCountGroupProps.js";
import h from "../../../../shared/DOMutil/virtualDOM.js";
import postHeaderVDOM from "./postHeaderVDOM.js";
import { getState } from "../../../../shared/state/currentState.js";
import LayoutVDOM from "../../../../app/layoutVDOM.js";

export default function BoardPostDetailPageVDOM() {
  const { post, comments } = getState();
  //state null 체크
  if (!post) {
    return h("div", { className: "loading" }, "로딩중...");
  }

  const headerProps = postHeaderProps(post);
  const contentProps = postContentProps(post);
  const countGroupProps = postCountGroupProps(post);

  const commentListVDOM =
    comments.length === 0
      ? [
          h(
            "div",
            {
              className: "no-comment",
              style: `
              margin: 50px;
              color: var(--color-meta);
              font-size: var(--font-size-base);
            `,
            },
            "등록된 댓글이 없습니다."
          ),
        ]
      : comments.map((c) => commentCardVDOM(commendProps(c)));

  return LayoutVDOM({
    headerMode: "Home",
    children: [
      h(
        "div",
        {
          className: "board-post-detail-page",
        },
        [
          h(
            "div",
            {
              className: "post-detail-content",
              style: "padding: 20px 0;",
            },
            [
              postHeaderVDOM(headerProps),
              postContentVDOM(contentProps),
              h(
                "div",
                { style: "display: flex; justify-content: flex-start;" },
                postCountGroupVDOM(countGroupProps)
              ),
            ]
          ),

          // 댓글 작성 카드
          commentCreatCardVDOM(post),

          // 댓글 리스트
          ...commentListVDOM,
        ]
      ),
    ],
  });
}
