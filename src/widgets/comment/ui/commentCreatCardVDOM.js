import h from "../../../shared/DOMutil/virtualDOM.js";
import { commentCreatBtn } from "../../../shared/ui/Button/ui/ButtonPresets.js";

export default function commentCreatCardVDOM(post) {
    console.log(post);
    return h("div", { className: "comment-creat-card" }, [
        // textarea
        h("textarea", {
            id: "comment-textarea",
            placeholder: "댓글을 남겨주세요!",
        }),

        // 버튼 영역
        h(
            "div",
            {
                className: "buttonWrapper",
            },
            [
                commentCreatBtn({
                    id: "comment-create-btn",
                    postId: post.id,
                }),
            ]
        ),
    ]);
}
