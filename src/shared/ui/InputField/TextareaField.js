class TextareaField extends HTMLElement {
  static get observedAttributes() {
    return ["label", "type", "placeholder", "helpertext"];
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
    return this._value;
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
    const label = this.getAttribute("label") || "";

    this.shadowRoot.innerHTML = /*HTML*/ `
      <style>
        .text-input-field{
    width:580px;
    padding-bottom:28px;
  }
  :host{
    gap:10px;
  }
  :host div{
    display:flex;
  }
  .input-title{
    font-weight:var(  --font-weight-bold);
    margin:15px 0;
  }
  .input-line{
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
  }
    .createInput{
        background:none;
        border:none;
        padding: 15px;
        width: 570px;
        font-size: 16px;
    }
    .createInput.content{
      height:300px;
    }
    .createInput:focus{
        outline:none;
    }
        .text-input-field .input-title {
          margin-bottom: 8px;
          display: flex;
          font-weight: 700;
          font-size: 16px;
        }
        .helper {
          color: var(--color-error, red);
          display:flex;
          margin-top: 8px;
          min-height: 14px;
          text-align: left;
        }

        .textareaContent{
            height:300px;
        }
    
      </style>
          <div class="input-title">${label}*</div>
          <div class="input-line">
              <textarea class="createInput ${type}" type="${type}" placeholder="${placeholder}"></textarea>
          </div>
          <div class="helper">${helperText}</div>
    `;

    //field
    const field = this.shadowRoot.querySelector("textarea");
    field.value = prevValue;

    field.addEventListener("input", (e) => {
      this._value = e.target.value;
    });

    field.addEventListener("blur", () => {
      this.dispatchEvent(
        new CustomEvent("field-blur", { detail: { value: this._value } })
      );
    });
  }
}

customElements.define("textarea-field", TextareaField);
