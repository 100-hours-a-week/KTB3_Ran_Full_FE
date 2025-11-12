import { updateBtn } from "../../../shared/ui/Button/ui/ButtonPresets.js";
import Title from "../../../shared/ui/Title/Title.js";
import inputFieldUser from "../../../widgets/inputField/ui/inputFieldUser.js";
import DeleteUserButton from "../../../widgets/profile/ui/DeleteUserButton.js";

function UserInfoPage() {
  const container = document.createElement("div");
  container.className = "user-page";

  const pageTitle = Title({
    text: "회원정보수정",
    styleProps: {
      fontWeight: "var(--font-weight-bold)",
    },
  });

  const textInfo = document.createElement("div");
  textInfo.className = "text-info-container";
  const inputFieldEmail = inputFieldUser({ title: "이메일", userData: "dd" });
  const inputFieldUsername = inputFieldUser({
    title: "닉네임",
    userData: "dd",
  });
  const deleteUserBtn = DeleteUserButton();

  const Btn = updateBtn();

  container.appendChild(pageTitle);
  textInfo.appendChild(inputFieldEmail);
  textInfo.appendChild(inputFieldUsername);
  container.appendChild(textInfo);
  container.appendChild(Btn);
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

  return containerWrapper;
}

export default UserInfoPage;
