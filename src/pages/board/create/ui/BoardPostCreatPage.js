import Title from "../../../../shared/ui/Title/Title.js";
import { pageCreatBtn } from "../../../../shared/ui/Button/ui/ButtonPresets.js";
import "../../../../shared/ui/InputField/TextInputField.js";
import "../../../../shared/ui/InputField/TextareaField.js";
import validatePostTitle from "../../../../features/board/lib/validatePostTitle.js";
import validatePostContent from "../../../../features/board/lib/validatePostContent.js";

function BoardPostCreatPage() {
  const boardPostCreatPage = document.createElement("div");
  boardPostCreatPage.className = "board-post-creat-page";
  boardPostCreatPage.style.display = "flex";
  boardPostCreatPage.style.flexDirection = "column";
  boardPostCreatPage.style.gap = "var(--gap-md)";
  boardPostCreatPage.style.padding = "var(--padding-card)";

  //title
  const pageTitle = Title({
    text: "한 줄 작성하기",
    styleProps: {
      fontWeight: "var(--font-weight-bold)",
      color: "var(--color-card-text)",
    },
  });

  const inputField = document.createElement("div");
  inputField.className = "post-create-input-field";

  inputField.innerHTML = /*HTML*/ `
          <text-input-field id="post-title" label = "제목" type="title" placeholder="" ></text-input-field>
          <textarea-field id="post-content" label = "내용" type="content" placeholder=""></textarea-field>
  `;

  const createBtn = pageCreatBtn();
  const button = createBtn.querySelector("button");

  boardPostCreatPage.appendChild(pageTitle);
  boardPostCreatPage.appendChild(inputField);
  boardPostCreatPage.appendChild(createBtn);

  const postTitle = boardPostCreatPage.querySelector("#post-title");
  const postContent = boardPostCreatPage.querySelector("#post-content");

  //유효성 검사
  function __updateState() {
    const title = postTitle.value;
    const content = postContent.value;

    if (!validatePostTitle(title) && !validatePostContent(content)) {
      button.disabled = false;
      button.classList.remove("disabled");
    } else {
      button.disabled = true;
      button.classList.add("disabled");
    }
  }

  //title field 이벤트 -> 유효성 검사
  postTitle.addEventListener("field-blur", (e) => {
    const title = e.target.value;
    postTitle.helperText = validatePostTitle(title);
    __updateState();
  });

  //content field 이벤트 -> 유효성 검사
  postContent.addEventListener("field-blur", (e) => {
    const content = e.target.value;
    postContent.helperText = validatePostContent(content);
    __updateState();
  });

  __updateState();

  return boardPostCreatPage;
}

export default BoardPostCreatPage;
