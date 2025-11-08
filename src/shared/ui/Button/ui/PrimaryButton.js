export default function Button({ text = "버튼", onClick = null } = {}) {
  const button = document.createElement("button");
  button.className = "primaryBtn";
  button.textContent = text;
  const style = document.createElement("style");

  style.textContent = /*CSS*/ `
        .primaryBtn{
                width:100%;
                padding:12px;
                background-color:var(--color-primary);
                color:#FFFFFF;
                justify-content:center;
                border-radius:4px;
                cursor:pointer;
        }`;
  const handleClick =
    onClick != null ? onClick : () => console.log("버튼을 클릭하였습니다.");

  button.addEventListener("click", handleClick);

  const Button = document.createElement("div");
  Button.className = "wrapper";
  Button.appendChild(button);
  Button.appendChild(style);

  return Button;
}
