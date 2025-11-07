export default function LoginButton() {
  const button = document.createElement("button");
  button.className = "loginBtn";
  button.textContent = "로그인 하러 가기";
  const style = document.createElement("style");

  style.textContent = /*HTML*/ `
        .loginBtn{
                border:none;
                cursor:pointer;
                background:none;
            }`;

  button.addEventListener("click", () => {
    console.log("로그인 버튼 클릭됨");
    location.hash = "";
    console.log("로그인 버튼 클릭됨");
  });

  const loginButton = document.createElement("div"); //하나의 div안에 button style을 함께 묶기 위해
  loginButton.appendChild(button);
  loginButton.appendChild(style);

  return loginButton;
}
