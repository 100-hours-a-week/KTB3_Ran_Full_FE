export default function actionGroupEffect() {
  const buttons = document.querySelectorAll(".action-group-btn");
  if (!buttons.length) return;

  //등록한 이벤트ㅡ 리스너를 삭제 하기 위한 클린업 배열
  const cleanups = [];

  buttons.forEach((button) => {
    const sibling = button.nextElementSibling;
    const modal =
      sibling && sibling.classList.contains("action-group-wrapper")
        ? sibling
        : null;

    if (!modal) return;

    const toggle = (event) => {
      event.stopPropagation();
      modal.classList.toggle("active");
      modal.style.display = modal.classList.contains("active")
        ? "block"
        : "none";
    };

    button.addEventListener("click", toggle);
    cleanups.push(() => button.removeEventListener("click", toggle)); //발생한 모든 액션 클린업 등록
  });

  return () => {
    cleanups.forEach((c) => c()); //클린업 등록
  };
}
