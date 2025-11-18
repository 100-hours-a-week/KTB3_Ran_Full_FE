export default function imgButton({
  src = "",
  alt = "",
  onClick = null,
  styleProps = {},
} = {}) {
  const button = document.createElement("button");
  button.className = "imgBtn";
  const style = document.createElement("style");

  const Button = document.createElement("div");

  const icon = document.createElement("img");
  icon.src = src;
  icon.alt = alt;

  Button.className = "imgWrapper";

  button.appendChild(icon);

  style.textContent = /*CSS*/ `
  .wrapper{
    display: flex;
    justify-content: flex-end;
    cursor:pointer;
  }
        `;

  if (styleProps.width) button.style.width = `${styleProps.width}px`;
  if (styleProps.height) button.style.height = `${styleProps.height}px`;
  if (styleProps.radius) button.style.borderRadius = `${styleProps.radius}px`;
  if (styleProps.margin) button.style.margin = `${styleProps.margin}px`;
  if (styleProps.padding) button.style.padding = `${styleProps.padding}px`;
  if (styleProps.background)
    button.style.background = `${styleProps.background}`;
  if (styleProps.justifyContent)
    Button.style.justifyContent = `${styleProps.justifyContent}`;
  button.style.cursor = "pointer";

  const handleClick =
    onClick != null ? onClick : () => console.log("버튼을 클릭하였습니다.");

  button.addEventListener("click", handleClick);

  Button.appendChild(button);
  Button.appendChild(style);

  return Button;
}
