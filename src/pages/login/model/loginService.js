import login from "../../../features/auth/api/login.js";

async function loginService({ email, password }) {
  try {
    const loginProps = {
      email,
      password,
    };
    const loginAPI = await login(loginProps);
    console.log("loginAPI", loginAPI);
  } catch (error) {
    const message =
      `*${error.message}` || "*아이디 또는 비밀번호가 일치하지 않습니다.";

    passwordField.helperText = message;
  }

  //맞으면 페이지 이동
}

export default loginService;
