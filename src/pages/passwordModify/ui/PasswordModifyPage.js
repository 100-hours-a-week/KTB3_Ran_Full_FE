import Title from "../../../shared/ui/Title/Title.js";

function PasswordModifyPage() {
  const container = document.createElement("div");
  container.className = "";

  const pageTitle = Title({
    text: "비밀번호 수정",
    styleProps: {
      fontWeight: "var(--font-weight-bold)",
    },
  });
  container.appendChild(pageTitle);

  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
  `;

  const containerWrapper = document.createElement("div");
  containerWrapper.appendChild(style);
  containerWrapper.appendChild(container);

  return containerWrapper;
}

export default PasswordModifyPage;
