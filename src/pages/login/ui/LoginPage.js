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

  return loginPage;
}
