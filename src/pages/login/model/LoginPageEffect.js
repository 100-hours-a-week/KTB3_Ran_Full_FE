import validateEmail from "../../../features/auth/lib/validateEmail.js";
import validatePassword from "../../../features/auth/lib/validatePassword.js";
import { navigateTo } from "../../../shared/router/Router.js";
import setState, { getState } from "../../../shared/state/currentState.js";
import handleLoginClick from "../lib/handleLoginClick.js";

export default function loginEffects() {
  console.log("loginEffects 등록됨");

  const root = document.querySelector(".login-page");
  if (!root) return;

  const emailInput = root.querySelector("#email");
  const passwordInput = root.querySelector("#password");
  const loginButton = root.querySelector("#login-button button");
  const signupButton = root.querySelector("#signup-nav-button");

  if (!emailInput || !passwordInput || !loginButton) return;

  const updateEmail = (value) => {
    const state = getState();
    setState({
      email: value,
      emailError: validateEmail(value),
      canSubmit: !validateEmail(value) && !validatePassword(state.password),
    });
  };

  const updatePassword = (value) => {
    const state = getState();
    setState({
      password: value,
      passwordError: validatePassword(value),
      canSubmit: !validateEmail(state.email) && !validatePassword(value),
    });
  };

  const onEmailBlur = (e) => updateEmail(e.target.value);
  const onPasswordBlur = (e) => updatePassword(e.target.value);
  const onLoginClick = () => handleLoginClick();
  const onSignupClick = () => navigateTo("/signup");

  emailInput.addEventListener("blur", onEmailBlur);
  passwordInput.addEventListener("blur", onPasswordBlur);
  loginButton.addEventListener("click", onLoginClick);
  signupButton?.addEventListener("click", onSignupClick);

  return () => {
    emailInput.removeEventListener("blur", onEmailBlur);
    passwordInput.removeEventListener("blur", onPasswordBlur);
    loginButton.removeEventListener("click", onLoginClick);
    signupButton?.removeEventListener("click", onSignupClick);
  };
}
