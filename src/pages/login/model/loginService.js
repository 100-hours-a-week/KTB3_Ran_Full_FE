import login from "../../../features/auth/api/login.js";
import validateEmail from "../../../features/auth/lib/validateEmail.js";
import validatePassword from "../../../features/auth/lib/validatePassword.js";
import { loginBtn } from "../../../shared/ui/Button/ui/ButtonPresets.js";

async function loginService({ emailField, passwordField }) {
  const emailValue = emailField.value;
  const passwordValue = passwordField.value;

  //유효성 검사 진행
  const emailError = validateEmail(emailValue);
  const passwordError = validatePassword(passwordValue);

  emailField.helperText = emailError;
  passwordField.helperText = passwordError;

  /// 유효성 검사 통과
  if (!emailError && !passwordError) {
    try {
      const loginProps = {
        emailValue,
        passwordValue,
      };
      const loginAPI = await login(loginProps);
      console.log("loginAPI", loginAPI);
    } catch (error) {
      const message =
        `*${error.message}` || "*아이디 또는 비밀번호가 일치하지 않습니다.";

      passwordField.helperText = message;
    }
  }

  //맞으면 페이지 이동
}

export default loginService;
