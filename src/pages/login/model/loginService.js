import login from "../../../features/auth/api/login.js";
import { loginDto } from "../../../features/auth/model/authDto.js";

async function loginService({ emailField, passwordField }) {
  const props = { ...loginDto };
  props.email = emailField.value;
  props.password = passwordField.value;

  try {
    const loginAPI = await login(props);
    console.log("loginAPI", loginAPI);
  } catch (error) {
    const message =
      `*${error.message}` || "*아이디 또는 비밀번호가 일치하지 않습니다.";

    passwordField.helperText = message;
  }

  //맞으면 페이지 이동
}

export default loginService;
