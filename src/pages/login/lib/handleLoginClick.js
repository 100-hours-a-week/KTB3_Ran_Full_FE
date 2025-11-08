import loginService from "../model/loginService.js";

async function handleLoginClick() {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const loginFieldProps = {
    email,
    password,
  };

  await loginService(loginFieldProps);
}

export default handleLoginClick;
