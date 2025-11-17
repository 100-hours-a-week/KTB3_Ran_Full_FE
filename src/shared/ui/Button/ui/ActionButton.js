function ActionButton({ text = "버튼", onClick = null, styleProps = {} } = {}) {
  const button = document.createElement("button");

  button.className = "actionBtn";
  button.textContent = text;

  const style = document.createElement("style");
  const Button = document.createElement("div");
  Button.className = "wrapper-Btn";

  style.textContent = /*CSS*/ `
  .action-group{
    display:flex;
    gap:5px;
  }
        .actionBtn{
                padding:2px 12px;
               border:1px solid var(--color-primary);
               color:var(--color-text);
                border-radius: var(--radius-button);
                cursor:pointer;
                font-size:var(--font-size-action);
        }

        `;

  if (styleProps.width) button.style.width = `${styleProps.width}%`;
  if (styleProps.radius) button.style.borderRadius = `${styleProps.radius}px`;
  if (styleProps.margin) button.style.margin = `${styleProps.margin}px`;
  if (styleProps.background)
    button.style.background = `${styleProps.background}`;

  const handleClick =
    onClick != null ? onClick : () => console.log("버튼을 클릭하였습니다.");

  button.addEventListener("click", handleClick);

  Button.appendChild(button);
  Button.appendChild(style);

  return Button;
}

export default ActionButton;
