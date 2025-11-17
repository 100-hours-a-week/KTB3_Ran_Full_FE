function postContent(props) {
  const container = document.createElement("div");
  container.className = "post-container";

  container.innerHTML = /*HTML*/ `
        <div class="post-content">${props.content}</div>
  `;

  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
    .post-content{
      word-break: break-all;
      font-size:var(--font-size-base);
    }
  `;

  const containerWrapper = document.createElement("div");
  containerWrapper.appendChild(style);
  containerWrapper.appendChild(container);

  return containerWrapper;
}

export default postContent;
