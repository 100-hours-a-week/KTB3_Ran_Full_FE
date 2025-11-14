import Title from "../../../../shared/ui/Title/Title.js";
import { pageCreatBtn } from "../../../../shared/ui/Button/ui/ButtonPresets.js";
import "../../../../shared/ui/InputField/TextInputField.js";
import "../../../../shared/ui/InputField/TextareaField.js";
import validatePostTitle from "../../../../features/board/lib/validatePostTitle.js";
import validatePostContent from "../../../../features/board/lib/validatePostContent.js";

function BoardPostUpdatePage(props) {
  const boardPostUpdatePage = document.createElement("div");
  boardPostUpdatePage.className = "board-post-update-page";
  boardPostUpdatePage.style.display = "flex";
  boardPostUpdatePage.style.flexDirection = "column";
  boardPostUpdatePage.style.gap = "var(--gap-md)";
  //title
  const pageTitle = Title({
    text: "게시물 수정",
    styleProps: {
      fontWeight: "var(--font-weight-bold)",
    },
  });

  const inputField = document.createElement("div");
  inputField.className = "post-update-input-field";

  inputField.innerHTML = /*HTML*/ `
          <text-input-field id="post-title" label = "제목" type="title" placeholder="제목을 입력해주세요. (최대 26글자)" ></text-input-field>
          <textarea-field id="post-content" label = "내용" type="content" placeholder="내용을 입력해주세요."></textarea-field>
  `;

  const createBtn = pageCreatBtn();
  const button = createBtn.querySelector("button");

  boardPostUpdatePage.appendChild(pageTitle);
  boardPostUpdatePage.appendChild(inputField);
  boardPostUpdatePage.appendChild(createBtn);

  const postTitle = boardPostUpdatePage.querySelector("#post-title");
  const postContent = boardPostUpdatePage.querySelector("#post-content");

  postTitle.value = props?.title ?? "값을 불러오지 못했습니다.";
  postContent.value = props?.content ?? "값을 불러오지 못했습니다.";

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

  return boardPostUpdatePage;
}

export default BoardPostUpdatePage;
