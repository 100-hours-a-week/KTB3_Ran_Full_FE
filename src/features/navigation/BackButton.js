export default function BackButton() {
  const backButton = document.createElement("button");
  backButton.textContent = "<";
  backButton.className = "back-button";

  backButton.addEventListener("click", () => {
    console.log("뒤로가기 버튼 클릭됨");
    window.history.back();
  });

  return backButton;
}
