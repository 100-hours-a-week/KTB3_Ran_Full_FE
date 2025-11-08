import signup from "../../../features/auth/api/signup.js";

async function SignupService({
  emailField,
  passwordField,
  passwordConfirmField,
  usernameField,
}) {
  const email = emailField.value;
  const password = passwordField.value;
  const confirmPassword = passwordConfirmField.value;
  const username = usernameField.value;

  const signupProps = {
    email,
    password,
    confirmPassword,
    username,
  };

  const passwordConfirmProps = {
    password,
    confirmPassword,
  };
  try {
    const signupAPI = await signup(signupProps);
    console.log("signupAPI", signupAPI);
  } catch (error) {
    //중복된 이메일일 경우
    const message = `*${error.message}` || "*회원가입이 불가합니다.";

    //백엔드에서 필드를 함께 넘겨줘야하지만 백엔드 코드를 수정을 일시적으로 미루기 위해 임의로 작성해두었습니다...
    if (message.includes("닉네임")) usernameField.helperText = message;
    if (message.includes("이메일")) emailField.helperText = message;

    //중복된 닉네임일 경우
  }
}

export default SignupService;
