function PasswordModifyPage() {
  const container = document.createElement("div");
  container.className = "";

  container.innerHTML = /*HTML*/ `
  `;

  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
  `;

  const containerWrapper = document.createElement("div");
  containerWrapper.appendChild(style);
  containerWrapper.appendChild(container);

  return containerWrapper;
}

export default PasswordModifyPage;
