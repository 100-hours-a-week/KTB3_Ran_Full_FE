import validateUsername from "../../../features/auth/lib/validateUsername.js";
import { userInfoDto } from "../../../features/user/model/userInfoDto.js";
import { updateBtn } from "../../../shared/ui/Button/ui/ButtonPresets.js";
import Title from "../../../shared/ui/Title/Title.js";
import inputFieldUser from "../../../widgets/inputField/ui/inputFieldUser.js";
import DeleteUserButton from "../../../widgets/profile/ui/DeleteUserButton.js";

function UserInfoPage(user) {
  const container = document.createElement("div");
  container.className = "user-page";

  const pageTitle = Title({
    text: "회원정보수정",
    styleProps: {
      fontWeight: "var(--font-weight-bold)",
    },
  });

  const userEmail = user?.email ?? "로그인 정보를 불러올 수 없습니다.";
  const userName = user?.username ?? "";

  const textInfo = document.createElement("div");
  textInfo.className = "text-info-container";
  const inputFieldEmail = inputFieldUser({
    title: "이메일",
    userData: userEmail,
  });

  const inputFieldUsername = document.createElement("input-field");
  inputFieldUsername.id = "username";
  inputFieldUsername.setAttribute("type", "text");
  inputFieldUsername.setAttribute("placeholder", "닉네임을 입력하세요");
  inputFieldUsername.textContent = "닉네임";
  inputFieldUsername.value = userName;

  const deleteUserBtn = DeleteUserButton();
  const button = updateBtn({
    getDto: () => userInfoDto({ username: inputFieldUsername.value }),
  });
  const modifyButton = button.querySelector("button");

  container.appendChild(pageTitle);
  textInfo.appendChild(inputFieldEmail);
  textInfo.appendChild(inputFieldUsername);
  container.appendChild(textInfo);
  container.appendChild(modifyButton);
  container.appendChild(deleteUserBtn);

  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
    .user-page{
        display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 auto;
            height: 100vh;
            background-color: var(--color-background);
            max-width: var(--auth-max-width);
            gap: var(--gap-md);
    }
        .input-field-container{
            display: flex;
            gap: 10px;
            flex-direction: column;
            align-items: flex-start;
        }

        .text-info-container{
            gap: 20px;
            display: flex;
            flex-direction: column;
        }
  `;

  const containerWrapper = document.createElement("div");
  containerWrapper.appendChild(style);
  containerWrapper.appendChild(container);

  const usernameField = container.querySelector("#username");

  function __updateState() {
    const username = usernameField.value;

    //이것도 모듈화 시킬수있을 것같은데
    if (!validateUsername(username)) {
      modifyButton.disabled = false;
      modifyButton.classList.remove("disabled");
    } else {
      modifyButton.disabled = true;
      modifyButton.classList.add("disabled");
    }
  }

  usernameField.addEventListener("field-blur", (e) => {
    const username = e.detail.value;
    usernameField.helperText = validateUsername(username);
    __updateState();
  });

  __updateState();

  return containerWrapper;
}

export default UserInfoPage;
