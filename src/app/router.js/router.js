import LoginPage from "../../pages/login/ui/loginPage.js";
import SignUpPage from "../../pages/signup/ui/SignUpPage.js";
import BoardHomePage from "../../pages/board/home/ui/BoardHomePage.js";
import BoardPostCreatPage from "../../pages/board/create/ui/BoardPostCreatPage.js";
import BoardPostDetailPage from "../../pages/board/detail/ui/BoardPostDetailPage.js";
import UserInfoPage from "../../pages/info/ui/UserInfoPage.js";
import PasswordModifyPage from "../../pages/passwordModify/ui/PasswordModifyPage.js";
import handleUserInfo from "../../pages/info/lib/handleUserInfo.js";
import handlePasswordModify from "../../pages/passwordModify/lib/handlePasswordModify.js";

export const routerPage = {
  "/login": LoginPage,
  "/signup": SignUpPage,
  "/home": BoardHomePage,
  "/post": BoardPostCreatPage,
  "/user/info": handleUserInfo,
  "/user/password-modify": handlePasswordModify,
  "/post/get/:id": BoardPostDetailPage,
};
