function inputFieldUser({
  title = "제목",
  userData = "유저 정보",
  helperText = "helperText",
} = {}) {
  const containerWrapper = document.createElement("div");
  containerWrapper.className = "input-field-container-wrapper";

  const container = document.createElement("div");
  container.className = "input-field-container";

  container.innerHTML = /*HTML*/ `
    <div>${title}</div>
    <div>${userData}</div>
    <div>${helperText}</div>
  `;

  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
        .input-field-container div:first-child{
            font-weight: var(--font-weight-bold);
            
        }
        
  `;

  containerWrapper.appendChild(style);
  containerWrapper.appendChild(container);

  return containerWrapper;
}

export default inputFieldUser;
