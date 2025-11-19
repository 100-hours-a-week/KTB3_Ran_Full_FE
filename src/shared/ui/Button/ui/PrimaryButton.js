export default function Button({
  text = "버튼",
  onClick = null,
  styleProps = {},
} = {}) {
  const button = document.createElement("button");
  button.className = "primaryBtn";
  button.textContent = text;
  const style = document.createElement("style");
  const Button = document.createElement("div");
  Button.className = "wrapper";

  style.textContent = /*CSS*/ `
  .wrapper{
    display: flex;
    justify-content: flex-end;
    
  }
        `;

  if (styleProps.width) button.style.width = `${styleProps.width}%`;
  if (styleProps.radius) button.style.borderRadius = `${styleProps.radius}px`;
  if (styleProps.margin) button.style.margin = `${styleProps.margin}px`;
  if (styleProps.padding) button.style.padding = `${styleProps.padding}px`;
  if (styleProps.background)
    button.style.background = `${styleProps.background}`;
  if (styleProps.justifyContent)
    Button.style.justifyContent = `${styleProps.justifyContent}`;
  if (styleProps.fontSize) button.style.fontSize = `${styleProps.fontSize}px`;
  if (styleProps.fontWeight)
    button.style.fontWeight = `${styleProps.fontWeight}px`;

  const handleClick =
    onClick != null ? onClick : () => console.log("버튼을 클릭하였습니다.");

  button.addEventListener("click", handleClick);

  Button.appendChild(button);
  Button.appendChild(style);

  return Button;
}
