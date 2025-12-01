export default function actionGroupToggleEffect() {
  const buttons = document.querySelectorAll(".action-group-btn");
  if (!buttons.length) return;

  const cleanups = [];

  buttons.forEach((button) => {
    const wrapper = button.nextElementSibling;
    if (!wrapper || !wrapper.classList.contains("action-group-wrapper")) return;

    wrapper.style.display = "none";

    const toggle = (e) => {
      e.stopPropagation();
      wrapper.classList.toggle("active");
      wrapper.style.display = wrapper.classList.contains("active")
        ? "block"
        : "none";
    };

    button.addEventListener("click", toggle);
    cleanups.push(() => button.removeEventListener("click", toggle));

    const close = () => {
      wrapper.classList.remove("active");
      wrapper.style.display = "none";
    };

    document.addEventListener("click", close);
    cleanups.push(() => document.removeEventListener("click", close));
  });

  return () => cleanups.forEach((fn) => fn());
}
