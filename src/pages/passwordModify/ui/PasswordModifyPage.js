import {
  updateBtn,
  updatePasswordBtn,
} from "../../../shared/ui/Button/ui/ButtonPresets.js";
import Title from "../../../shared/ui/Title/Title.js";
import inputFieldUser from "../../../widgets/inputField/ui/inputFieldUser.js";
import DeleteUserButton from "../../../widgets/profile/ui/DeleteUserButton.js";
import "../../../shared/ui/InputField/InputField.js";
import validateEmail from "../../../features/auth/lib/validateEmail.js";
import validatePassword from "../../../features/auth/lib/validatePassword.js";
import { passwordConfirmProps } from "../../auth/model/props.js";
import validateConfirmPassword from "../../../features/auth/lib/confirmPassword.js";
import { userPasswordDto } from "../../../features/user/model/userPasswordDto.js";

function PasswordModifyPage() {
  const container = document.createElement("div");
  container.className = "auth-container";

  const pageTitle = Title({
    text: "비밀번호 변경",
    styleProps: {
      fontWeight: "var(--font-weight-bold)",
    },
  });

  container.appendChild(pageTitle);

  const inputField = document.createElement("div");
  inputField.className = "input-field-container";

  inputField.innerHTML = /*HTML*/ `
        <input-field id="password" type="password" placeholder="비밀번호를 입력하세요">비밀번호</input-field>
        <input-field id="passwordConfirm" type="password" placeholder="비밀번호를 한번 더 입력하세요">비밀번호 확인</input-field>
    `;
  container.appendChild(inputField);
  const deleteUserNavButton = DeleteUserButton();

  //포커싱 blur 이벤트 사용
  const passwordField = container.querySelector("#password");
  const passwordConfirmField = container.querySelector("#passwordConfirm");

  //수정하기 버튼
  const button = updatePasswordBtn({
    getDto: () => userPasswordDto({ password: passwordField.value }),
  });
  const modifyButton = button.querySelector("button");
  container.appendChild(button);

  function __updateState() {
    const password = passwordField.value;

    const validateConfirmPasswordProps = { ...passwordConfirmProps };
    validateConfirmPasswordProps.password = passwordField.value;
    validateConfirmPasswordProps.confirmPassword = passwordConfirmField.value;

    if (
      !validatePassword(password) &&
      !validateConfirmPassword(validateConfirmPasswordProps)
    ) {
      modifyButton.disabled = false;
      modifyButton.classList.remove("disabled");
    } else {
      modifyButton.disabled = true;
      modifyButton.classList.add("disabled");
    }
  }

  passwordField.addEventListener("field-blur", (e) => {
    const password = e.detail.value;
    passwordField.helperText = validatePassword(password);
    __updateState();
  });

  passwordConfirmField.addEventListener("field-blur", (e) => {
    const confirmPassword = e.detail.value;
    const password = passwordField.value;

    passwordConfirmField.helperText = validateConfirmPassword({
      password,
      confirmPassword,
    });
    __updateState();
  });

  __updateState();
  return container;
}
export default PasswordModifyPage;
