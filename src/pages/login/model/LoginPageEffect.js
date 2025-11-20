import validateEmail from "../../../features/auth/lib/validateEmail.js";
import validatePassword from "../../../features/auth/lib/validatePassword.js";
import { navigateTo } from "../../../shared/router/Router.js";
import setState, { getState } from "../../../shared/state/currentState.js";

export default function loginEffects() {
  console.log("loginEffects 등록됨");

  function onInput(e) {
    //로그인 페이지가 아닌 다른 페이지 일 경우 작동하지 않음.
    if (!document.querySelector(".login-page")) return;

    const { id, value } = e.target;
    const state = getState();

    if (id === "email") {
      setState({
        email: value,
        emailError: validateEmail(value),
        canSubmit: !validateEmail(value) && !validatePassword(state.password),
      });
    }

    if (id === "password") {
      setState({
        password: value,
        passwordError: validatePassword(value),
        canSubmit: !validateEmail(state.email) && !validatePassword(value),
      });
    }
  }

  document.addEventListener("input", onInput);

  document.addEventListener("click", (e) => {
    if (e.target.id === "signup-nav-button") {
      console.log("회원가입 버튼 클릭됨");
      location.hash = "/signup";
      navigateTo("/signup");
    }
  });

  return () => {
    document.removeEventListener("input", onInput);
  };
}
