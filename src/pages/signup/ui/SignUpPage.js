import "../../../shared/ui/InputField/InputField.js";
import { signupDto } from "../../../features/auth/model/authDto.js";
import { signupBtn } from "../../../shared/ui/Button/ui/ButtonPresets.js";
import LoginButton from "../../../features/navigation/LoginButton.js";
import validateConfirmPassword from "../../../features/auth/lib/confirmPassword.js";
import validateEmail from "../../../features/auth/lib/validateEmail.js";
import validatePassword from "../../../features/auth/lib/validatePassword.js";
import validateUsername from "../../../features/auth/lib/validateUsername.js";
import { passwordConfirmProps } from "../../auth/model/props.js";

export default function SignUpPage() {
  const signupPage = document.createElement("div");
  signupPage.className = "signup-page";
  signupPage.innerHTML = /*HTML*/ `
      <div class="auth-container">
        <h2>회원가입</h2>
        <input-field id="email" type="text" placeholder="이메일을 입력하세요">이메일*</input-field>
        <input-field id="password" type="password" placeholder="비밀번호를 입력하세요">비밀번호*</input-field>
        <input-field id="passwordConfirm" type="password" placeholder="비밀번호를 한번 더 입력하세요">비밀번호 확인*</input-field>
        <input-field id="username" type="text" placeholder="닉네임을 입력하세요">닉네임*</input-field>
        </div>

  `;

  const loginNavButton = LoginButton();
  const signupButton = signupBtn();
  const container = signupPage.querySelector(".auth-container");
  container.appendChild(signupButton);
  container.appendChild(loginNavButton);

  //포커싱 blur 이벤트 사용
  const emailField = container.querySelector("#email");
  const passwordField = container.querySelector("#password");
  const passwordConfirmField = container.querySelector("#passwordConfirm");
  const usernameField = container.querySelector("#username");

  const button = container.querySelector("button");

  function __updateState() {
    const email = emailField.value;
    const password = passwordField.value;
    const username = usernameField.value;

    const validateConfirmPasswordProps = { ...passwordConfirmProps };
    validateConfirmPasswordProps.password = passwordField.value;
    validateConfirmPasswordProps.confirmPassword = passwordConfirmField.value;

    if (
      !validateEmail(email) &&
      !validatePassword(password) &&
      !validateConfirmPassword(validateConfirmPasswordProps) &&
      !validateUsername(username)
    ) {
      button.disabled = false;
      button.classList.remove("disabled");
    } else {
      button.disabled = true;
      button.classList.add("disabled");
    }
  }

  //shadow DOM을 왜 도입했을까..~
  emailField.addEventListener("field-blur", (e) => {
    const email = e.detail.value;
    emailField.helperText = validateEmail(email);
    __updateState();
  });

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

  usernameField.addEventListener("field-blur", (e) => {
    const username = e.detail.value;
    usernameField.helperText = validateUsername(username);
    __updateState();
  });

  __updateState();
  return signupPage;
}
