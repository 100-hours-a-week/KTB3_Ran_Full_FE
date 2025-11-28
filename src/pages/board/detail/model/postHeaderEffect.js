export default function postHeaderEffect(postId) {
  if (!postId) return;

  const button = document.getElementById(`action-btn-${postId}`);
  const modal = document.getElementById(`action-modal-${postId}`);

  if (!button || !modal) return;

  const toggle = (event) => {
    event.stopPropagation();
    modal.classList.toggle("active");
    modal.style.display = modal.classList.contains("active") ? "block" : "none";
  };

  button.addEventListener("click", toggle);

  return () => {
    button.removeEventListener("click", toggle);
  };
}
