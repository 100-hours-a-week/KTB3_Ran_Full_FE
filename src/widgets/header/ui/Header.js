const template = document.createElement("template");
template.innerHTML =
  /*HTML*/
  `<style>
            h3 {
                margin:0 auto; 
                padding:16px; 
                width:100%;
                color:var(--color-text); 
                text-align:center;
                border-bottom: 1px solid var(--color-secondary);
            }
        </style>
        <h3>
            <slot></slot>
        </h3>`;

class Header extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" }); //shadow DOM 생성
    shadow.appendChild(template.content.cloneNode(true)); //위에서 만든 템플릿 복제 후 추가
  }
}

customElements.define("base-header", Header);
