export default function Button({ text = "버튼" } = {}) {
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

  button.addEventListener("click", () => {
    console.log("Primary 버튼 클릭됨");
  });

  const Button = document.createElement("div");
  Button.className = "wrapper";
  Button.appendChild(button);
  Button.appendChild(style);

  return Button;
}
