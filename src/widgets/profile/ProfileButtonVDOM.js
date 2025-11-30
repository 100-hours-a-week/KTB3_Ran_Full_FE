import h from "../../shared/DOMutil/virtualDOM.js";
import setState, { getState } from "../../shared/state/currentState.js";
import { navigateTo } from "../../shared/router/Router.js";
import logout from "./model/logout.js";
import ProfileMenuModalVDOM from "./ui/ProfileMenuModalVDOM.js";

function ProfileButtonVDOM() {
  const state = getState();
  const profileModalVisible = state.ui?.profileModalVisible ?? false;
  const user = sessionStorage.getItem("accessToken");
  const visible = !!user;

  return h("div", { className: "profile-wrapper" }, [
    h(
      "div",
      {
        id: "profile-btn",
        className: "profile-button",
        style: `
          visibility: ${visible ? "visible" : "hidden"};
          width: var(--header-side-width);
          height: 40px;
          background: var(--color-secondary);
          border-radius: 50%;
          cursor: pointer;
          overflow: hidden;
        `,
        onclick: () => {
          const state = getState();

          setState({
            ui: {
              profileModalVisible: !state.ui.profileModalVisible, //해당 부분만 덮어쓰기
            },
          });
        },
      },
      []
    ),

    // 모달을 VDOM 형태로 렌더링
    ProfileMenuModalVDOM({
      visible: profileModalVisible,
      onUserInfo: () => (location.hash = "/user/info"),
      onPassword: () => (location.hash = "/user/password-modify"),
      onLogout: () => logout(),
    }),
  ]);
}

export default ProfileButtonVDOM;
