const template = document.createElement("template");
template.innerHTML = `
    <base-header></base-header>
    `;

class HomeHeader extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const header = this.shadowRoot.querySelector("base-header");
    header.setAttribute("title", "아무말 대잔치");
  }
}

customElements.define("home-header", HomeHeader); //대문자 태그 금지;
