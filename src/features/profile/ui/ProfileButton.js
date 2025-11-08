export default function ProefileButton() {
  const profile = document.createElement("profile-image");
  profile.className = "profile-button";
  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
        .profile-button{
            display:flex;
            width:40px;
            height:40px;
            border-radius:50%;
            overflow:hidden;
            cursor:pointer;
            background-color:var(--color-secondary);
        }
    `;

  profile.addEventListener("click", () => {
    console.log("프로필 버튼 클릭됨");
  });

  const wrapper = document.createElement("div");
  wrapper.className = "profile-wrapper";
  wrapper.appendChild(profile);
  wrapper.appendChild(style);

  return wrapper;
}
