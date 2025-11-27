import h from "../../../../shared/DOMutil/virtualDOM.js";
import actionGroupBtnVDOM from "../../../../widgets/actionGroupBtn/ui/actionGroupBtnVDOM.js";
import actionGroupVDOM from "../../../../widgets/actionGroup/ui/actionGroupVDOM.js";
import { Props } from "../../../../shared/ui/Button/model/Props.js";
import { ContentType } from "../../../../shared/lib/ContentType.js";

export default function postHeaderVDOM(props) {
  const btnType = Props({
    type: ContentType.POST,
    onDelete: () => props.onDelete(props.postId),
    onEdit: () => props.onEdit(props),
  });

  return h("div", { className: "post-header-wrapper" }, [
    // 상단 메타 정보
    h(
      "div",
      { className: "post-container", style: "padding: var(--padding-h3);" },
      [
        h("div", { className: "post-meta" }, [
          h("div", { className: "post-title" }, props.title),
          h("div", { className: "detail" }, [
            h("div", { className: "log" }, [
              h("div", { className: "author" }, props.author),
              h("div", { className: "date" }, props.date),
            ]),
          ]),
        ]),

        // 액션 버튼 + 모달 그룹
        h("div", { className: "action-group-button-wrapper" }, [
          actionGroupBtnVDOM({ id: `action-btn-${props.postId}` }),
          actionGroupVDOM({
            id: `action-modal-${props.postId}`,
            btnType,
          }),
        ]),
      ]
    ),
  ]);
}
