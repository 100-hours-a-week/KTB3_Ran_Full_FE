export function commentCardEffect() {
  const buttons = document.querySelectorAll(".action-group-btn");
  const modals = document.querySelectorAll(".action-group-modal");

  buttons.forEach((btn, idx) => {
    const modal = modals[idx];

    const toggle = (e) => {
      e.stopPropagation();
      modal.classList.toggle("active");
    };

    btn.addEventListener("click", toggle);

    return () => {
      btn.removeEventListener("click", toggle);
    };
  });
}
