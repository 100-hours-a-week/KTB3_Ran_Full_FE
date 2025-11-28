export default function actionGroupToggleEffect() {
  const buttons = document.querySelectorAll(".action-group-btn");
  if (!buttons.length) return;

  const cleanups = [];

  buttons.forEach((button) => {
    const wrapper = button.nextElementSibling;
    if (!wrapper || !wrapper.classList.contains("action-group-wrapper")) return;

    const toggle = (e) => {
      e.stopPropagation();
      wrapper.classList.toggle("active");
      wrapper.style.display = wrapper.classList.contains("active")
        ? "block"
        : "none";
    };

    button.addEventListener("click", toggle);

    cleanups.push(() => button.removeEventListener("click", toggle));
  });

  return () => cleanups.forEach((fn) => fn());
}
