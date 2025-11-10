function textInputField({
  text = "제목",
  placeholder = "",
  helperText = "",
  type = "",
} = {}) {
  const textInputFieldEl = document.createElement("div");
  textInputFieldEl.className = "text-input-field";

  const style = document.createElement("style");

  style.textContent = /*CSS*/ `
  .text-input-field{
    width:580px;
    padding-bottom:28px;
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
    
  `;

  textInputFieldEl.innerHTML = /*HTML */ `
    <div class="input-title">*${text}</div>
    <div class="input-line">
    <input class="createInput" type="${text}" placeholder="${placeholder}"/>
    </div>
    <div class="helper">${helperText}</div>
  `;

  if (type === "content") {
    const input = textInputFieldEl.querySelector("input");
    const textarea = document.createElement("textarea");
    textarea.className = "textareaContent";
    textarea.placeholder = placeholder;
    textarea.classList.add("createInput");

    input.replaceWith(textarea);
  }

  const TextInputField = document.createElement("div");
  TextInputField.appendChild(style);
  TextInputField.appendChild(textInputFieldEl);

  return TextInputField;
}

export default textInputField;
