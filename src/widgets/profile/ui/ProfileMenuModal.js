import {
  passwordModifyNaviHandler,
  userInfoNaviHandler,
} from "../../../features/navigation/handlerProfileNavi.js";
import MenuButton from "../../../shared/ui/Button/ui/MenuButton.js";

function ProfileMenuModal() {
  const container = document.createElement("div");
  container.className = "profile-modal-wrapper";
  const style = document.createElement("style");

  style.textContent = /*CSS*/ `
    #profile-modal-container-wrapper{
      display:none;
        position:absolute;
        transform: translate(-64%, 10%);
    }
    #profile-modal-container-wrapper.active{
      display:block;
    }


  `;

  const containerWrapper = document.createElement("div");
  containerWrapper.id = "profile-modal-container-wrapper";

  if (containerWrapper.id == "profile-modal-container-wrapper") {
    containerWrapper.classList.remove("active");
  } else {
    containerWrapper.classList.add("active");
  }

  const userInfoNaviBtn = MenuButton({
    text: "회원정보수정",
    onClick: userInfoNaviHandler,
  });
  const passwordNaviBtn = MenuButton({
    text: "비밀번호수정",
    onClick: passwordModifyNaviHandler,
  });
  const logoutNaviPage = MenuButton({
    text: "로그아웃",
    onClick: () => console.log("로그아웃 클릭됨"),
  });

  container.appendChild(userInfoNaviBtn);
  container.appendChild(passwordNaviBtn);
  container.appendChild(logoutNaviPage);

  //함수 실행 시 스타일 적용

  containerWrapper.appendChild(style);
  containerWrapper.appendChild(container);

  return containerWrapper;
}

export default ProfileMenuModal;
