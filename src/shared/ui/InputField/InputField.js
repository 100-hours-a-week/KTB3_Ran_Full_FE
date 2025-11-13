class InputField extends HTMLElement {
  static get observedAttributes() {
    return ["type", "placeholder", "helpertext"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._value = ""; // 내부 상태로 value 유지
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  //현재값 getter
  get value() {
    return this._value || "";
  }

  set value(value) {
    this._value = value;
    const input = this.shadowRoot.querySelector("input");
    input.value = value;
  }

  //속성값 반환 setter
  set helperText(message) {
    this.setAttribute("helpertext", message);
  }

  get helperText() {
    this.getAttribute("helpertext");
  }

  render() {
    const prevValue = this._value;

    const type = this.getAttribute("type") || "text";
    const placeholder = this.getAttribute("placeholder") || "";
    const helperText = this.getAttribute("helpertext") || "";
    const label = this.textContent;

    this.shadowRoot.innerHTML = /*HTML*/ `
      <style>
        .input-field-container { width: 100%; }
        .input-field-container .title {
          margin-bottom: 8px;
          display: flex;
          font-weight: 700;
          font-size: 16px;
        }
        .input-field-container input {
          width: 380px;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
        }
        .helper {
          color: var(--color-error, red);
          display:flex;
          margin-top: 8px;
          min-height: 14px;
          text-align: left;
        }
      </style>
      <div class="input-field-container">
          <div class="title">${label}</div>
          <input type="${type}" placeholder="${placeholder}" />
          <div class="helper">${helperText}</div>
      </div>
    `;

    const input = this.shadowRoot.querySelector("input");
    input.value = prevValue;

    input.addEventListener("input", (e) => {
      this._value = e.target.value;
    });

    input.addEventListener("blur", () => {
      this.dispatchEvent(
        new CustomEvent("field-blur", { detail: { value: this._value } })
      );
    });
  }
}

customElements.define("input-field", InputField);
