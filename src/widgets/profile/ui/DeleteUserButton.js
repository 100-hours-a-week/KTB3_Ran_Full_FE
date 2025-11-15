export default function DeleteUserButton() {
  const button = document.createElement("button");
  button.className = "loginBtn";
  button.textContent = "회원탈퇴";

  button.addEventListener("click", () => {
    console.log("회원탈퇴 클릭됨");
    location.hash = "/login";
  });

  return button;
}
