function Title({ text = "제목", styleProps = {} } = {}) {
  const container = document.createElement("div");
  const style = document.createElement("style");

  container.className = "title-container";
  container.innerHTML = /*HTML */ `
    <div class="title">${text}</div>
  `;

  style.textContent = /*CSS*/ `
    .title{
        font-size:var(--font-size-title);
        padding:40px;
    }
  `;

  const title = container.querySelector(".title");

  if (styleProps.padding) title.style.padding = `${styleProps.padding}px`;
  if (styleProps.fontWeight)
    title.style.fontWeight = `${styleProps.fontWeight}`;

  const Title = document.createElement("div");
  Title.appendChild(container);
  Title.appendChild(style);
  return Title;
}

export default Title;
