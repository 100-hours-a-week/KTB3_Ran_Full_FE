import h from "../../../shared/DOMutil/virtualDOM.js";

export default function BackButtonVDOM({ mode }) {
  // 표시 여부 계산
  let visible = true;

  if (mode === "Signup") visible = true;
  else if (!sessionStorage.getItem("accessToken")) visible = false;
  else if (mode === "Home" || mode === "Info") visible = false;

  return h(
    "div",
    {
      className: "back-button",
      style: `
        visibility: ${visible ? "visible" : "hidden"};
        cursor: pointer;
        width: var(--header-side-width);
      `,
      onclick: () => {
        console.log("뒤로가기 버튼 클릭됨");
        window.history.back();
      },
    },
    [
      h("img", {
        src: "public/icon/back_icon.svg",
        alt: "뒤로가기",
        className: "back-icon",
      }),
    ]
  );
}
