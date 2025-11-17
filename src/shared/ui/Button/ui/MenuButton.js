function MenuButton({ text = "메뉴 버튼", onClick = null } = {}) {
  const container = document.createElement("div");
  container.className = "menu-button";
  container.textContent = text;

  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
    .menu-button{
      padding:10px 20px;
      background-color:var(--color-light-gray);
      cursor:pointer;
    }
  `;

  const containerWrapper = document.createElement("div");
  containerWrapper.appendChild(style);
  containerWrapper.appendChild(container);

  const handleOnClick =
    onClick != null ? onClick : () => console.log("메뉴 버튼 클릭됨");

  containerWrapper.addEventListener("click", handleOnClick);

  return containerWrapper;
}

export default MenuButton;
