import { loginFieldProps } from "../../../features/auth/model/props.js";
import loginService from "../model/loginService.js";

async function handleLoginClick() {
  const loginFieldProps = { ...loginFieldProps };

  loginFieldProps.emailField = document.querySelector("#email");
  loginFieldProps.passwordField = document.querySelector("#password");

  await loginService(loginFieldProps);
}

export default handleLoginClick;
