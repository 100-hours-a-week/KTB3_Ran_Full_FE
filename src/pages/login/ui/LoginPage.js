import validateConfirmPassword from "../../../features/auth/lib/confirmPassword.js";
import validateEmail from "../../../features/auth/lib/validateEmail.js";
import validatePassword from "../../../features/auth/lib/validatePassword.js";
import validateUsername from "../../../features/auth/lib/validateUsername.js";
import SignupButton from "../../../features/navigation/SignupButton.js";
import { loginBtn } from "../../../shared/ui/Button/ui/ButtonPresets.js";
import "../../../shared/ui/InputField/InputField.js";

export default function LoginPage() {
  const loginPage = document.createElement("div");
  loginPage.className = "login-page";

  loginPage.innerHTML = /*HTML*/ `
        <div class="auth-container">
             <img class="logo" src="public/logo.svg"/>  
                <div class="desc">새로운 지식은 <span>한 줄</span>에서 시작됩니다. </div>
                <div class="auth-container-wrapper">
                    <input-field id="email" type="text" placeholder="" helperText="">이메일</input-field>
                    <input-field id="password" type="password" placeholder="">비밀번호</input-field>
                </div>
        </div>`;

  const signupNavDes = document.createElement("div");
  signupNavDes.textContent = "당신의 한 줄을 기록해보세요.";
  signupNavDes.className = "signup-nav-des";
  const signupNavButton = SignupButton();
  const signupNavButtonWrapper = document.createElement("div");
  signupNavButtonWrapper.className = "signup-nav-btn-wrapper";

  const container = loginPage.querySelector(".auth-container");
  const containerWrapper = loginPage.querySelector(".auth-container-wrapper");
  const loginButton = loginBtn();

  containerWrapper.appendChild(loginButton);
  signupNavButtonWrapper.appendChild(signupNavDes);
  signupNavButtonWrapper.appendChild(signupNavButton);
  container.appendChild(signupNavButtonWrapper);

  //포커싱 blur 이벤트 사용
  const emailField = loginPage.querySelector("#email");
  const passwordField = loginPage.querySelector("#password");
  const button = loginPage.querySelector("button");

  function __updateState() {
    const email = emailField.value;
    const password = passwordField.value;

    if (!validateEmail(email) && !validatePassword(password)) {
      button.disabled = false;
      button.classList.remove("disabled");
    } else {
      button.disabled = true;
      button.classList.add("disabled");
    }
  }

  //shadow DOM을 왜 도입했을까..~
  emailField.addEventListener("field-blur", (e) => {
    const email = e.target.value;
    emailField.helperText = validateEmail(email);
    __updateState();
  });

  passwordField.addEventListener("field-blur", (e) => {
    const password = e.target.value;
    passwordField.helperText = validatePassword(password);
    __updateState();
  });

  __updateState();

  return loginPage;
}
