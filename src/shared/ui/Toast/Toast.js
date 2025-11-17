function Toast(message) {
  const toast = document.createElement("div");
  toast.id = "toast";
  toast.dataset.type = "Info";
  const style = document.createElement("style");
  style.textContent = /*CSS */ `
    #toast {
        position: absolute;
        left: 50%;
        bottom: 15%;
        transform: translateX(-50%);
        padding: 12px 22px;
        border-radius: 100px;
        background: var(--color-primary);
        color: #fff;
        opacity: 0.9;
        font-size: 14px;
        z-index: 2;
        transition: opacity 1s ease, transform 0.5s ease;
    }`;

  toast.textContent = message;
  console.log(toast);

  const toastWrapper = document.createElement("div");
  toastWrapper.appendChild(toast);
  toastWrapper.appendChild(style);

  setTimeout(() => toast.remove(), 1200);

  return toastWrapper;
}

export default Toast;
