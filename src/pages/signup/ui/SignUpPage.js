import "../../../shared/ui/InputField/InputField.js";
import Button from "../../../shared/ui/Button/ui/Button.js";
import LoginButton from "../../../features/navigation/LoginButton.js";

export default function SignUpPage() {
  const signupPage = document.createElement("div");
  signupPage.className = "signup-page";
  signupPage.innerHTML = /*HTML*/ `
      <div class="auth-container">
        <h2>회원가입</h2>
        <input-field type="text" placeholder="이메일을 입력하세요" helperText="*helper Text">이메일*</input-field>
        <input-field type="password" placeholder="비밀번호를 입력하세요" helperText="*비밀번호를 확인해주세요">비밀번호*</input-field>
        <input-field type="password" placeholder="비밀번호를 한번 더 입력하세요" helperText="*비밀번호가 같지 않습니다.">비밀번호 확인*</input-field>
        <input-field type="password" placeholder="닉네임을 입력하세요" helperText="*helper Text">닉네임*</input-field>
        
        </div>

  `;
  const loginButton = LoginButton();
  const primaryButton = Button({ text: "회원가입" });
  const container = signupPage.querySelector(".auth-container");
  container.appendChild(primaryButton);
  container.appendChild(loginButton);

  return signupPage;
}
