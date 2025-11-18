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
      <div class="gap"></div>
      <div class="auth-container">
        <div class="desc">당신의 첫 번째 한 줄을 <br/><span>기록할 준비</span>가 되셨나요?</div>
          <div class="auth-container-wrapper">
              <input-field id="email" type="text" placeholder="">이메일</input-field>
              <input-field id="password" type="password" placeholder="">비밀번호</input-field>
              <input-field id="passwordConfirm" type="password" placeholder="">비밀번호 확인</input-field>
              <input-field id="username" type="text" placeholder="">닉네임</input-field>
          </div>
        </div>

  `;

  const loginNavButton = LoginButton();
  const signupButton = signupBtn();
  const container = signupPage.querySelector(".auth-container");
  const containerWrapper = signupPage.querySelector(".auth-container-wrapper");
  containerWrapper.appendChild(signupButton);
  container.appendChild(loginNavButton);

  const navDes = document.createElement("div");
  navDes.textContent = "회원 정보가 있나요?";
  navDes.className = "nav-des";

  const navButtonWrapper = document.createElement("div");
  navButtonWrapper.className = "nav-btn-wrapper";

  navButtonWrapper.appendChild(navDes);
  navButtonWrapper.appendChild(loginNavButton);
  container.appendChild(navButtonWrapper);

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
