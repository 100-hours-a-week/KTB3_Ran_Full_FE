import modalController from "./modalController.js";

export default function actionGroupItemEffect() {
  const wrappers = document.querySelectorAll(".action-group-wrapper");
  if (!wrappers.length) return;

  const cleanups = [];

  //모든 className이 actionGroupWrapper를 불러옴.
  wrappers.forEach((wrapper) => {
    //imgBTn찾기
    const buttons = wrapper.querySelectorAll(".imgBtn");

    buttons.forEach((btn) => {
      const handler = (e) => {
        e.stopPropagation();

        const action = btn.dataset.actionType; // "edit" | "delete"
        const payload = JSON.parse(btn.dataset.actionPayload); // { type, onEdit, onDelete }

        console.log(payload);
        if (!action || !payload) return;

        // action 그룹 닫기
        wrapper.classList.remove("active");
        wrapper.style.display = "none";

        // 액션별로 그냥 payload에 있는 함수만 실행
        console.log(payload);
        if (action === "edit") modalController.open("edit", payload);
        if (action === "delete") modalController.open("delete", payload);
      };

      btn.addEventListener("click", handler);
      cleanups.push(() => btn.removeEventListener("click", handler));
    });
  });

  return () => cleanups.forEach((c) => c());
}
