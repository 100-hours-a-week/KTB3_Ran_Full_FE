import LayoutVDOM from "../../../../app/layoutVDOM.js";
import h from "../../../../shared/DOMutil/virtualDOM.js";
import { postCreateBtnVDOM } from "../../../../shared/ui/Button/ui/ButtonPresets.js";
import TitleVDOM from "../../../../shared/ui/Title/TitleVDOM.js";
import BoardCardVDOM from "../../../../widgets/post/ui/boardCardVDOM.js";

export default function BoardHomePageVDOM(state) {
  return LayoutVDOM({
    headerMode: "Home",
    children: [
      h("div", { className: "board-home-page" }, [
        // 제목
        TitleVDOM({
          text: `<br>오늘은 어떤 개념을 요약해볼까요?`,
          className: "boardTitle",
        }),

        // 글 생성 버튼
        postCreateBtnVDOM({
          className: "post-create-button",
        }),

        // 카드 렌더링
        h(
          "div",
          { className: "card-container" },
          state.posts.map((post) => BoardCardVDOM(post))
        ),
      ]),
    ],
  });
}
