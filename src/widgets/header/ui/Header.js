import BackButton from "../../../features/navigation/BackButton.js";
import ProefileButton from "../../profile/ui/ProfileButton.js";

//기본 Shadow DOM 스타일 정의
const template = document.createElement("template");

const style = document.createElement("style");
style.textContent = /*CSS*/ `
:host{
  border-bottom: 1px solid var(--color-secondary);
    display: flex;
    justify-content: center;

}
h3 {
    font-size: var(--font-size-header);
    font-weight : 400;
    margin: 10px;
    padding: 10px;
    color: var(--color-text);
    text-align: center;
    display: flex;
              
            }
.header-wrapper {
    display: flex;
    width: 100%;
    max-width: var(--layout-max-width);
    align-items: center;
    justify-content: space-between;
}
`;

//요소 생성

const wrapper = document.createElement("div");
wrapper.className = "header-wrapper";

const h3 = document.createElement("h3");
const slot = document.createElement("slot");
const backButton = BackButton();
const profileButton = ProefileButton();

h3.appendChild(slot);

template.content.appendChild(style);
template.content.appendChild(wrapper);

class Header extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" }); //shadow DOM 생성

    shadow.appendChild(template.content.cloneNode(true)); //위에서 만든 템플릿 복제 후 추가

    shadow.querySelector(".header-wrapper").appendChild(backButton); //뒤로가기 추가
    shadow.querySelector(".header-wrapper").appendChild(h3); //헤더 타이틀 추가
    shadow.querySelector(".header-wrapper").appendChild(profileButton); //프로필 버튼 추가
  }
}

customElements.define("base-header", Header);
