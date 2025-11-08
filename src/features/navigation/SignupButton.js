export default function SignupButton() {
  const button = document.createElement("button");
  button.className = "signupBtn";
  button.textContent = "회원가입";
  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
    .signupBtn{
                border:none;
                cursor:pointer;
                background:none;
            }`;

  //   const signupBtn = document.querySelector(".signupBtn");

  button.addEventListener("click", () => {
    console.log("회원가입 버튼 클릭됨");
    location.hash = "/signup";
    console.log("회원가입 버튼 클릭됨");
  });

  const signupbutton = document.createElement("div"); //div로 감싸야됨
  signupbutton.appendChild(button);
  signupbutton.appendChild(style);
  // .appendChild(style)
  // .appendChild(button);
  //연쇄 호출 때문에 막힌다고 함.

  return signupbutton;
}
