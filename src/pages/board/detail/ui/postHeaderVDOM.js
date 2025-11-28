import h from "../../../../shared/DOMutil/virtualDOM.js";
import { ContentType } from "../../../../shared/lib/ContentType.js";
import { Props } from "../../../../shared/ui/Button/model/Props.js";
import actionGroupBtnVDOM from "../../../../widgets/actionGroupBtn/ui/actionGroupBtnVDOM.js";
import actionGroupVDOM from "../../../../widgets/actionGroup/ui/actionGroupVDOM.js";

export default function postHeaderVDOM({
  title,
  author,
  date,
  postId,
  onDelete,
  onEdit,
} = {}) {
  const btnType = {
    type: ContentType.POST,
    onDelete: () => onDelete?.(postId),
    onEdit: () => onEdit?.({ title, author, date, postId }),
  };

  return h(
    "div",
    { className: "post-header-wrapper" },
    h(
      "div",
      { className: "post-container", style: "padding: var(--padding-h3);" },
      [
        h("div", { className: "post-meta" }, [
          h("div", { className: "post-title" }, title),
          h("div", { className: "detail" }, [
            h("div", { className: "log" }, [
              h("div", { className: "author" }, author),
              h("div", { className: "date" }, date),
            ]),
          ]),
        ]),
        h("div", { className: "action-group-button-wrapper" }, [
          actionGroupBtnVDOM({ id: `action-btn-${postId}` }),
          actionGroupVDOM({ id: `action-modal-${postId}`, ...btnType }),
        ]),
      ]
    )
  );
}
