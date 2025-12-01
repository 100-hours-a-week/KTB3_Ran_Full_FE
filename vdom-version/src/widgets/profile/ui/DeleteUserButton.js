import handleUserDelete from "../../../pages/info/lib/handleUserDelete.js";
import userDeleteModal from "../../../shared/lib/userDeleteModal.js";

export default function DeleteUserButton() {
  const button = document.createElement("button");
  button.className = "loginBtn";
  button.textContent = "회원탈퇴";
  button.style.fontWeight = "400";

  const action = () => handleUserDelete();
  button.addEventListener("click", () => userDeleteModal(action));

  return button;
}
