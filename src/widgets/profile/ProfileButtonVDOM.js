import h from "../../shared/DOMutil/virtualDOM.js";
import setState from "../../shared/state/currentState.js";
import ProfileMenuModalVDOM from "./ui/ProfileMenuModalVDOM.js";

function ProfileButtonVDOM(mode) {
  const user = sessionStorage.getItem("accessToken");
  const visible = !!user;

  return h("div", { className: "profile-wrapper" }, [
    h(
      "div",
      {
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
          setState({
            profileModalVisible: !mode.profileModalVisible,
          });
        },
      },
      []
    ),

    // 모달을 VDOM 형태로 렌더링
    ProfileMenuModalVDOM({
      visible: mode.profileModalVisible,
    }),
  ]);
}

export default ProfileButtonVDOM;
