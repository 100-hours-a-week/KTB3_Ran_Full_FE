import loginService from "../model/loginService.js";

async function handleLoginClick() {
  const emailField = document.querySelector("#email");
  const passwordField = document.querySelector("#password");

  const loginFieldProps = {
    emailField,
    passwordField,
  };

  await loginService(loginFieldProps);
}

export default handleLoginClick;
