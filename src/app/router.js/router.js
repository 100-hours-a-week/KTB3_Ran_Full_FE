import LoginPageVDOM from "../../pages/login/ui/LoginPageVDOM.js";
import loginEffects from "../../pages/login/model/LoginPageEffect.js";
import LoginState from "../../pages/login/model/LoginState.js";
import SignupPageVDOM from "../../pages/signup/ui/SignUpPageVDOM.js";
import signupState from "../../pages/signup/model/signupState.js";
import signupEffects from "../../pages/signup/model/signupEffects.js";
import BoardHomePageVDOM from "../../pages/board/home/ui/BoardHomePageVDOM.js";
import BoardHomeEffect from "../../pages/board/home/model/BoardHomeEffect.js";
import BoardHomeState from "../../pages/board/home/model/BoardHomeState.js";
import imgButtonEffect from "../../widgets/imgButton/model/imgButtonEffect.js";

export const routerPage = {
  "/login": { page: LoginPageVDOM, effect: loginEffects, state: LoginState },
  "/signup": {
    page: SignupPageVDOM,
    effect: signupEffects,
    state: signupState,
  },
  "/home": {
    page: BoardHomePageVDOM,
    effect: [BoardHomeEffect, imgButtonEffect],
    state: BoardHomeState,
  },
  // "/post/get": {
  //   page: () => h("div", {}, "loading..."),
  //   effect: null,
  //   state: {},
  // },
  // "/user/info": handleUserInfo,
  // "/user/password-modify": handlePasswordModify,
  // "/post/update": BoardPostUpdatePage,
};
