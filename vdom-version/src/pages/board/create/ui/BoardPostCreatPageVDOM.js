import h from "../../../../shared/DOMutil/virtualDOM.js";
import TitleVDOM from "../../../../shared/ui/Title/TitleVDOM.js";
import { pageCreatBtn } from "../../../../shared/ui/Button/ui/ButtonPresets.js";
import LayoutVDOM from "../../../../app/LayoutVDOM.js";
import { PostInputFieldVDOM } from "../../../../shared/ui/PostInputField/PostInputFieldVDOM.js";
import TextareaFieldVDOM from "../../../../shared/ui/TextareaField/TextareaFieldVDOM.js";

export default function BoardPostCreatPageVDOM(state) {
  return LayoutVDOM({
    headerMode: "Home",
    children: [
      h("div", { className: "board-post-creat-page" }, [
        TitleVDOM({
          text: "한 줄 작성하기",
          styleProps: {
            fontWeight: "var(--font-weight-bold)",
            color: "var(--color-card-text)",
          },
        }),

        h("div", { className: "post-create-input-field" }, [
          PostInputFieldVDOM({
            id: "post-title",
            label: "제목",
            stateKey: "title",
            state,
          }),

          TextareaFieldVDOM({
            id: "post-content",
            label: "내용",
            placeholder: "",
            stateKey: "content",
            state,
          }),
        ]),

        pageCreatBtn({
          id: "post-create-button",
          state, // canSubmit 반영됨
        }),
      ]),
    ],
  });
}
