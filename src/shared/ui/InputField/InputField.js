const template = document.createElement("template");
template.innerHTML = /*HTML*/ `
   <style>
    .input-field-container {
        width: 100%;

    }
    .title{
        margin-bottom:8px;
        display:flex;
        font-weight:700;
        font-size:16px;
    }
    input {
        width:380px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
    }
    .helper{
        color:var(--color-error);
        display:flex;
        margin-top:8px;
    }
  </style>
    <div class="input-field-container">
        <div class="title"><slot></slot></div>
        <div><input /></div>
        <div class="helper"></div>
    </div>
        `;

class InputField extends HTMLElement {
  //속성 안에 값을 받으려면 props 처럼
  static get observedAttributes() {
    return ["type", "placeholder", "helperText"];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }

  //처음 연결될 때
  connectedCallback() {
    this.__updatedAttribute();
  }

  //속성이 변경될때마다 호출
  attributeChangedCallback() {
    this.__updatedAttribute();
  }

  //공통 속성 업데이트
  __updatedAttribute() {
    const input = this.shadowRoot.querySelector("input");
    const helper = this.shadowRoot.querySelector(".helper");

    input.type = this.getAttribute("type") || "text"; //외부에서 type 속성으로 타입 지정 가능
    input.placeholder = this.getAttribute("placeholder") || "";
    input.helperText = this.getAttribute("helperText") || "";

    helper.textContent = input.helperText;
  }
}

customElements.define("input-field", InputField);

// 개선 여지는 조금 있습니다: input.helperText 대신 helper.textContent를 직접 설정하고,
// 필요하면 focus/blur 같은 이벤트를 외부로 전달하는 메서드를 노출하면 더 완성도 높은 컴포넌트가 됩니다. 그래도 “그냥 함수”보다 관리하기 쉬운 형태라는 점은 명확합니다.
