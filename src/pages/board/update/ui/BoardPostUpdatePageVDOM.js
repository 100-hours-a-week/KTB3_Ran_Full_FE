import h from "../../../../shared/DOMutil/virtualDOM.js";
import TitleVDOM from "../../../../shared/ui/Title/TitleVDOM.js";
import { pageUpdateBtn } from "../../../../shared/ui/Button/ui/ButtonPresets.js";

import TextareaFieldVDOM from "../../../../shared/ui/TextareaField/TextareaFieldVDOM.js";
import PostInputFieldVDOM from "../../../../shared/ui/PostInputField/PostInputFieldVDOM.js";

export default function BoardPostUpdatePageVDOM(state) {
  return h("div", { className: "board-post-update-page" }, [
    TitleVDOM({
      text: "게시물 수정",
      styleProps: { fontWeight: "var(--font-weight-bold)" },
    }),

    h("div", { className: "post-update-input-field" }, [
      PostInputFieldVDOM({
        id: "post-title",
        label: "제목",
        placeholder: "제목을 입력해주세요. (최대 26글자)",
        state,
        stateKey: "title",
      }),

      TextareaFieldVDOM({
        id: "post-content",
        label: "내용",
        placeholder: "내용을 입력해주세요.",
        state,
        stateKey: "content",
      }),
    ]),

    pageUpdateBtn({
      id: "post-update-button",
      state,
    }),
  ]);
}
