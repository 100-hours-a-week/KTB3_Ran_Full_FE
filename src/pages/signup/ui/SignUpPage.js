import "../../../shared/ui/InputField/InputField.js";
import { signupBtn } from "../../../shared/ui/Button/ui/ButtonPresets.js";
import LoginButton from "../../../features/navigation/LoginButton.js";

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

  return signupPage;
}
