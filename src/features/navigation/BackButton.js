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

  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  wrapper.appendChild(backButton);
  wrapper.appendChild(style);

  wrapper.update = (mode) => {
    if (mode === "Signup") {
      backButton.style.visibility = "visible";
    } else if (!sessionUser.getUser()) {
      backButton.style.visibility = "hidden";
    } else if (mode === "Home" || mode === "Info") {
      backButton.style.visibility = "hidden";
    } else {
      backButton.style.visibility = "visible";
    }
  };

  return wrapper; //반환하는 건 wrapper = 이 자체가 외부에선 backbutton
}
