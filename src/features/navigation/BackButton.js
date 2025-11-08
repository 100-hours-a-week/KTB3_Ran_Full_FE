export default function BackButton() {
  const backButton = document.createElement("div");
  backButton.textContent = "<";
  backButton.className = "back-button";
  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
    .back-button{
      cursor : pointer;
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

  return wrapper;
}
