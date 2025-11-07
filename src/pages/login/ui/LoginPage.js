import SignupButton from "../../../features/navigation/SignupButton.js";
import Button from "../../../shared/ui/Button/Button.js";
import "../../../shared/ui/InputField/InputField.js";

export default function LoginPage() {
  const loginPage = document.createElement("div");
  loginPage.className = "login-page";

  loginPage.innerHTML = /*HTML*/ `
            <style>
            .login-container{
                display:flex;
                flex-direction:column;

                align-items:center;
                justify-content:center;

                height:100vh;

                background-color:var(--color-background);

                                max-width: 400px;
                    margin: 0 auto;
                    gap: 20px;
            }
            .login-container .loginBtn{
                width:100%;
                padding:12px;
                background-color:var(--color-primary);
                color:#FFFFFF;
                border:none;
                border-radius:4px;
                cursor:pointer;
            }

            .loginBtn:hover{
                background-color:var(--color-secondary);
            }
        </style>
        <div class="login-container">
                <h2>로그인</h2>
                <input-field type="text" placeholder="이메일을 입력하세요" helperText="*이메일을 확인해주세요">이메일</input-field>
                <input-field type="password" placeholder="비밀번호를 입력하세요" helperText="*비밀번호를 확인해주세요">비밀번호</input-field>
        </div>`;

  const primaryButton = Button({ text: "로그인" });
  const signupButton = SignupButton();
  const container = loginPage.querySelector(".login-container");
  container.appendChild(primaryButton);
  container.appendChild(signupButton);

  return loginPage;
}
