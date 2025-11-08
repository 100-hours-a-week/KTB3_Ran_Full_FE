import Button from "./PrimaryButton.js";
import handleLoginClick from "../../../../pages/login/lib/handleLoginClick.js";
import handleSignupClick from "../../../../pages/signup/lib/handleSignupClick.js";

// PrimaryButton
export function loginBtn() {
  return Button({
    text: "로그인",
    onClick: handleLoginClick,
  });
}

export function signupBtn() {
  return Button({
    text: "회원가입",
    onClick: handleSignupClick,
  });
}
