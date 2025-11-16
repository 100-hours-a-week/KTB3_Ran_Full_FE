import sessionUser from "../../../shared/utils/session.js";
import ProfileMenuModal from "./ProfileMenuModal.js";

export default function ProfileButton() {
  const profile = document.createElement("div");
  profile.className = "profile-button";
  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
        .profile-button{
            display:flex;
            width:var(--header-side-width);
            height:40px;
            border-radius:50%;
            overflow:hidden;
            cursor:pointer;
            background-color:var(--color-secondary);
        }
    `;

  const modal = ProfileMenuModal();
  profile.addEventListener("click", () => {
    modal.classList.toggle("active");
  });

  function __updateState() {
    profile.style.visibility = sessionUser.getUser() ? "visible" : "hidden";
  }
  __updateState();
  window.addEventListener("hashchange", __updateState);

  const wrapper = document.createElement("div");
  wrapper.className = "profile-wrapper";
  wrapper.appendChild(profile);
  wrapper.appendChild(modal);
  wrapper.appendChild(style);

  return wrapper;
}
