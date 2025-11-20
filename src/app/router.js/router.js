import LoginPage from "../../pages/login/ui/loginPage.js";
import SignUpPage from "../../pages/signup/ui/SignUpPage.js";
import BoardHomePage from "../../pages/board/home/ui/BoardHomePage.js";
import BoardPostCreatPage from "../../pages/board/create/ui/BoardPostCreatPage.js";
import BoardPostDetailPage from "../../pages/board/detail/ui/BoardPostDetailPage.js";
import UserInfoPage from "../../pages/info/ui/UserInfoPage.js";
import PasswordModifyPage from "../../pages/passwordModify/ui/PasswordModifyPage.js";
import handleUserInfo from "../../pages/info/lib/handleUserInfo.js";
import handlePasswordModify from "../../pages/passwordModify/lib/handlePasswordModify.js";
import BoardPostUpdatePage from "../../pages/board/update/ui/BoardPostUpdatePage.js";
import LoginPageVDOM from "../../pages/login/ui/LoginPageVDOM.js";
import loginEffects from "../../pages/login/model/LoginPageEffect.js";
import LoginState from "../../pages/login/model/LoginState.js";

export const routerPage = {
  "/login": { page: LoginPageVDOM, effect: loginEffects, state: LoginState },
  "/signup": SignUpPage,
  "/home": BoardHomePage,
  "/post": BoardPostCreatPage,
  "/user/info": handleUserInfo,
  "/user/password-modify": handlePasswordModify,
  "/post/update": BoardPostUpdatePage,
};
