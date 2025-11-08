export default function BackButton() {
  const backButton = document.createElement("button");
  backButton.textContent = "뒤로가기";
  backButton.className = "back-button";

  return backButton;
}
