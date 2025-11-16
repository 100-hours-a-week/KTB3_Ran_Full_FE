import sessionUser from "../../shared/utils/session.js";

export default function BackButton() {
  const backButton = document.createElement("div");
  backButton.textContent = "<";
  backButton.className = "back-button";
  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
    .back-button{
      cursor : pointer;
      width:var(--header-side-width);
    }
  `;

  backButton.addEventListener("click", () => {
    console.log("뒤로가기 버튼 클릭됨");
    window.history.back();
  });

  function __updateState() {
    if (!sessionUser.getUser()) backButton.style.visibility = "hidden";
  }
  __updateState();

  window.addEventListener("hashchange", __updateState);

  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  wrapper.appendChild(backButton);
  wrapper.appendChild(style);

  wrapper.update = (mode) => {
    backButton.style.visibility =
      mode === "Home" || mode === "Info" ? "hidden" : "visible";
  };

  return wrapper;
}
