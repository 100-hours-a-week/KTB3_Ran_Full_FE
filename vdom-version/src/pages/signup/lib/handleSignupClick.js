import SignupService from "../model/signupService.js";

async function handleSignupClick() {
  const emailField = document.querySelector("#email");
  const passwordField = document.querySelector("#password");
  const passwordConfirmField = document.querySelector("#passwordConfirm");
  const usernameField = document.querySelector("#username");

  const signupFieldProps = {
    emailField,
    passwordField,
    passwordConfirmField,
    usernameField,
  };

  await SignupService(signupFieldProps);
}

export default handleSignupClick;
