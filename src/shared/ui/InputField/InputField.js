// class InputField extends HTMLElement {
//   static get observedAttributes() {
//     return ["type", "placeholder", "helpertext"];
//   }

import h from "../../DOMutil/virtualDOM.js";

//   constructor() {
//     super();
//     this.attachShadow({ mode: "open" });
//     this._value = ""; // 내부 상태로 value 유지
//   }

//   connectedCallback() {
//     this.render();
//   }

//   attributeChangedCallback() {
//     this.render();
//   }

//   //현재값 getter
//   get value() {
//     return this._value || "";
//   }

//   set value(value) {
//     this._value = value;
//     const input = this.shadowRoot.querySelector("input");
//     input.value = value;
//   }

//   //속성값 반환 setter
//   set helperText(message) {
//     this.setAttribute("helpertext", message);
//   }

//   get helperText() {
//     this.getAttribute("helpertext");
//   }

//   render() {
//     const prevValue = this._value;

//     const type = this.getAttribute("type") || "text";
//     const placeholder = this.getAttribute("placeholder") || "";
//     const helperText = this.getAttribute("helpertext") || "";
//     const label = this.textContent;

//     this.shadowRoot.innerHTML = /*HTML*/ `
//       <style>
//         .input-field-container { width: 100%; }
//         .input-field-container .title {
//           margin-bottom: 8px;
//           display: flex;
//           font-weight: var(--font-weight-bold);
//           font-size: var(--font-size-base);
//           color:var(--color-text);
//         }
//         .input-field-container input {
//         width: 380px;
//             border: none;
//             font-size: var(--font-size-base);
//             background: none;
//         }
//         .inputWrapper{
//           padding:10px;
//           border-bottom:2px solid var(--color-text);
//         }
//         input:focus{
//           outline:none;
//         }
//         .helper {
//           color: var(--color-error, red);
//           display:flex;
//           margin-top: 8px;
//           min-height: 14px;
//          font-size:var(--font-size-sm);
//           text-align: left;

//         }

//       </style>
//       <div class="input-field-container">
//           <div class="title">${label}</div>
//           <div class="inputWrapper"><input type="${type}" placeholder="${placeholder}" /></div>
//           <div class="helper">${helperText}</div>
//       </div>
//     `;

//     const input = this.shadowRoot.querySelector("input");
//     input.value = prevValue;

//     input.addEventListener("input", (e) => {
//       this._value = e.target.value;
//     });

//     input.addEventListener("blur", () => {
//       this.dispatchEvent(
//         new CustomEvent("field-blur", {
//           detail: { value: this._value },
//           bubbles: true,
//           composed: true,
//         })
//       );
//     });
//   }
// }

// customElements.define("input-field", InputField);

export function InputField({
  id = "",
  label = "",
  value = "",
  type = "text",
  placeholder = "",
  helperText = "",
  onInput = null,
  onBlur = null,
}) {
  return h("div", { className: "input-field-container" }, [
    h("div", { className: "title" }, [label]),
    h("div", { className: "inputWrapper" }, [
      h("input", {
        id,
        type,
        value,
        placeholder,
        oninput: onInput,
        onblur: onBlur,
      }),
    ]),
    h("div", { className: "helper" }, [helperText]),
  ]);
}
