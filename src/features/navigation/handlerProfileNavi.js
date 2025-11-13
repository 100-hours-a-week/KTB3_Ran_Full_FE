//중복 코드 존재
//토글이 페이지 이동시 자동으로 닫힘

import handleUserInfo from "../../pages/info/lib/handleUserInfo.js";

export function userInfoNaviHandler() {
  location.hash = "/user/info";
  const shadowRoot = document.querySelector("base-header").shadowRoot;
  const profileBox = shadowRoot.querySelector(".profile-wrapper");
  const profile = profileBox.querySelector("#profile-modal-container-wrapper");
  handleUserInfo();
  profile.classList.remove("active");
}

export function passwordModifyNaviHandler() {
  location.hash = "/user/password-modify";
  const shadowRoot = document.querySelector("base-header").shadowRoot;
  const profileBox = shadowRoot.querySelector(".profile-wrapper");
  const profile = profileBox.querySelector("#profile-modal-container-wrapper");
  profile.classList.remove("active");
}
