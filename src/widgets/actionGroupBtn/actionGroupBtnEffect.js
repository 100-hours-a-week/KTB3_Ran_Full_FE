export default function actionGroupBtnEffect(postId) {
  const btn = document.getElementById(`action-btn-${postId}`);
  const modal = document.getElementById(`action-modal-${postId}`);

  if (!btn || !modal) return;

  function toggle() {
    modal.classList.toggle("active");
  }

  btn.addEventListener("click", toggle);

  return () => {
    btn.removeEventListener("click", toggle);
  };
}
