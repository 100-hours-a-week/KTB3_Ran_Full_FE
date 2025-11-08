import BackButton from "../../../features/navigation/BackButton.js";

//기본 Shadow DOM 스타일 정의
const template = document.createElement("template");

const style = document.createElement("style");
style.textContent = /*CSS*/ `
h3 {
                margin:0 auto; 
                padding:16px; 
                width:100%;
                color:var(--color-text); 
                text-align:center;
                border-bottom: 1px solid var(--color-secondary);
            }
`;

//요소 생성

const wrapper = document.createElement("div");
wrapper.className = "header-wrapper";

const h3 = document.createElement("h3");
const slot = document.createElement("slot");
const backButton = BackButton();

h3.appendChild(slot);

wrapper.appendChild(backButton);
wrapper.appendChild(h3);

template.content.appendChild(style);
template.content.appendChild(wrapper);

class Header extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" }); //shadow DOM 생성
    shadow.appendChild(template.content.cloneNode(true)); //위에서 만든 템플릿 복제 후 추가
    shadow.querySelector(".back-button").addEventListener("click", () => {
      console.log("뒤로가기 버튼 클릭됨");
      window.history.back();
    });
  }
}

customElements.define("base-header", Header);
