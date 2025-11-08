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
                <h2>로그인</h2>
                <input-field id="email" type="text" placeholder="이메일을 입력하세요" >이메일</input-field>
                <input-field id="password" type="password" placeholder="비밀번호를 입력하세요">비밀번호</input-field>
        </div>`;

  const signupNavButton = SignupButton();
  const container = loginPage.querySelector(".auth-container");
  const loginButton = loginBtn();

  container.appendChild(loginButton);
  container.appendChild(signupNavButton);

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
