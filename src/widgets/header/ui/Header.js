import BackButton from "../../../features/navigation/BackButton.js";
import ProfileButton from "../../profile/ui/ProfileButton.js";

//기본 Shadow DOM 스타일 정의
const template = document.createElement("template");

template.innerHTML = /*HTML*/ `
<style>
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
.logo{
  cursor:pointer;
}
</style>
`;

//요소 생성

const wrapper = document.createElement("div");
wrapper.className = "header-wrapper";

const h3 = document.createElement("h3");
h3.className = "logo";

const slot = document.createElement("slot");
h3.appendChild(slot);

template.content.appendChild(wrapper);

class Header extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" }); //shadow DOM 생성

    shadow.appendChild(template.content.cloneNode(true)); //위에서 만든 템플릿 복제 후 추가
  }

  //dom에 붙는 순간 실행됨
  connectedCallback() {
    this.backButton = BackButton(); //button 내부 변수명 wrapper
    this.titleElement = h3;
    this.profileButton = ProfileButton();

    h3.addEventListener("click", () => {
      location.hash = "/";
    });

    const wrapper = this.shadowRoot.querySelector(".header-wrapper");
    wrapper.appendChild(this.backButton);
    wrapper.appendChild(this.titleElement);
    wrapper.appendChild(this.profileButton);

    // UI 업데이트 호출
    this._updateUI();
  }

  //변화 추적 감지
  static get observedAttributes() {
    return ["data-mode"];
  }

  //달라지면 실행
  attributeChangedCallback() {
    this._updateUI();
  }

  //현재 헤더의 모드 전달
  _updateUI() {
    const mode = this.dataset.mode;
    if (this.backButton && this.backButton.update) {
      this.backButton.update(mode);
    }
    if (this.profileButton && this.profileButton.update) {
      this.profileButton.update(mode);
    }
  }
}

customElements.define("base-header", Header);
