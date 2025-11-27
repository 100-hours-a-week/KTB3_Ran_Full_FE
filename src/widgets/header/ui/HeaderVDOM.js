import h from "../../../shared/DOMutil/virtualDOM.js";
import BackButtonVDOM from "../../../features/navigation/BackButton/BackButtonVDOM.js";
import ProfileButtonVDOM from "../../profile/ProfileButtonVDOM.js";

export default function HeaderVDOM({ mode }) {
  return h(
    "div",
    {
      className: "header-wrapper",
      "data-mode": mode,
    },
    [
      // 뒤로가기 버튼
      BackButtonVDOM({ mode }),

      // 로고 텍스트/이미지
      h("img", {
        className: "logo",
        src: "public/logo.svg",
        alt: "서비스 로고",
        onclick: () => {
          location.hash = "/home";
        },
      }),

      // 프로필 버튼
      ProfileButtonVDOM(mode),
    ]
  );
}
