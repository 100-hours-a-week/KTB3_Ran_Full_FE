import h from "../../../shared/DOMutil/virtualDOM.js";

export default function ProfileMenuModalVDOM({
  visible,
  onUserInfo,
  onPassword,
  onLogout,
}) {
  return h(
    "div",
    {
      id: "profile-modal-container-wrapper",
      className: visible ? "active" : "",
      style: `
        position: absolute;
        transform: translate(-70%, 10%);
        display: ${visible ? "block" : "none"};
        z-index: 10;
      `,
    },
    [
      // 메뉴 버튼들 (각각 VDOM 컴포넌트로 분리하는 것도 가능)
      h(
        "div",
        {
          className: "profile-menu-item top",
          onclick: onUserInfo,
          style: `
            padding: 12px 16px;
            background: white;
            border-bottom: 1px solid #ddd;
            border-radius: 20px 20px 0 0;
            cursor: pointer;
          `,
        },
        "회원정보수정"
      ),

      h(
        "div",
        {
          className: "profile-menu-item middle",
          onclick: onPassword,
          style: `
            padding: 12px 16px;
            background: white;
            border-bottom: 1px solid #ddd;
            cursor: pointer;
          `,
        },
        "비밀번호수정"
      ),

      h(
        "div",
        {
          className: "profile-menu-item bottom",
          onclick: onLogout,
          style: `
            padding: 12px 16px;
            background: white;
            border-radius: 0 0 20px 20px;
            cursor: pointer;
          `,
        },
        "로그아웃"
      ),
    ]
  );
}
