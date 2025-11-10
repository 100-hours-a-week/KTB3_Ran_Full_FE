import { loginFieldProps } from "../../auth/model/props.js";
import loginService from "../model/loginService.js";

async function handleLoginClick() {
  const props = { ...loginFieldProps };

  props.emailField = document.querySelector("#email");
  props.passwordField = document.querySelector("#password");

  await loginService(props);
}

export default handleLoginClick;
