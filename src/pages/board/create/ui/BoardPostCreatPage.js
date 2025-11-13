import Title from "../../../../shared/ui/Title/Title.js";
import textInputField from "../../../../shared/ui/InputField/TextInputField.js";
import { pageCreatBtn } from "../../../../shared/ui/Button/ui/ButtonPresets.js";

function BoardPostCreatPage() {
  const boardPostCreatPage = document.createElement("div");
  boardPostCreatPage.className = "board-post-creat-page";

  //title
  const pageTitle = Title({
    text: "페이지 생성",
    styleProps: {
      fontWeight: "var(--font-weight-bold)",
    },
  });

  const titleField = textInputField({
    text: "제목",
    type: "title",
    placeholder: "제목을 입력해주세요. (최대 26글자)",
    helperText: "",
  });

  const contentField = textInputField({
    text: "내용",
    type: "content",
    placeholder: "내용을 입력해주세요.",
    helperText: "",
  });

  const createBtn = pageCreatBtn();

  boardPostCreatPage.appendChild(pageTitle);
  boardPostCreatPage.appendChild(titleField);
  boardPostCreatPage.appendChild(contentField);
  boardPostCreatPage.appendChild(createBtn);

  return boardPostCreatPage;
}

export default BoardPostCreatPage;
