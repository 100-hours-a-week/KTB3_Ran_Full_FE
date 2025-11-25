import validateConfirmPassword from "../../../features/auth/lib/confirmPassword.js";
import validateEmail from "../../../features/auth/lib/validateEmail.js";
import validatePassword from "../../../features/auth/lib/validatePassword.js";
import validateUsername from "../../../features/auth/lib/validateUsername.js";
import setState, { getState } from "../../../shared/state/currentState.js";

function signupEffects() {
  console.log("signupEffect 등록됨");

  function onInput(e) {
    if (!document.querySelector(".signup-page")) return;

    const { id, value } = e.target;
    const state = getState();

    if (id === "email") {
      setState({
        email: value,
        emailError: validateEmail(value),
        canSubmit:
          !validateEmail(value) &&
          !validatePassword(state.password) &&
          !validateConfirmPassword({
            password: state.password,
            confirmPassword: state.passwordConfirm,
          }) &&
          !validateUsername(state.username),
      });
    }

    if (id === "password") {
      setState({
        password: value,
        passwordError: validatePassword(value),
        canSubmit:
          !validateEmail(state.email) &&
          !validatePassword(value) &&
          !validateConfirmPassword({
            password: value,
            confirmPassword: state.passwordConfirm,
          }) &&
          !validateUsername(state.username),
      });
    }

    if (id === "passwordConfirm") {
      setState({
        passwordConfirm: value,
        passwordConfirmError: validateConfirmPassword({
          password: state.password,
          confirmPassword: value,
        }),
        canSubmit:
          !validateEmail(state.email) &&
          !validatePassword(value) &&
          !validateConfirmPassword({
            password: state.password,
            confirmPassword: value,
          }) &&
          !validateUsername(state.username),
      });
    }

    if (id === "username") {
      setState({
        username: value,
        usernameError: validateUsername(value),
        canSubmit:
          !validateEmail(state.email) &&
          !validatePassword(state.password) &&
          !validateConfirmPassword({
            password: state.password,
            confirmPassword: state.passwordConfirm,
          }) &&
          !validateUsername(value),
      });
    }
  }

  document.addEventListener("input", onInput);

  document.addEventListener("click", (e) => {
    if (e.target.id === "login-nav-button") {
      console.log("로그인 하러가기 버튼 클릭됨");
      location.hash = "/login";
      navigateTo("/login");
    }
  });

  return () => {
    document.removeEventListener("input", onInput);
  };
}

export default signupEffects;
