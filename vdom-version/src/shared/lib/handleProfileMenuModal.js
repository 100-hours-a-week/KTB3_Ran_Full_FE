import ProfileMenuModal from "../../widgets/profile/ui/ProfileMenuModal.js";

function handleProfileMenuModal() {
  const modal = ProfileMenuModal();
  let idProfile = document.querySelector("#profile-modal-container-wrapper");

  if (!idProfile) {
    document.appendChild(modal);
  } else {
    document.removeChild(idProfile);
  }
  console.log("프로필 메뉴 모달 클릭됨");

  return modal;
}

export default handleProfileMenuModal;
