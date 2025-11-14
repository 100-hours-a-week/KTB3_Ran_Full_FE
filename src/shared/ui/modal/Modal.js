import { confirmBtn, quitBtn } from "../Button/ui/ButtonPresets.js";

function Modal({ title = "제목", subTitle = "내용", onClick = null } = {}) {
  const container = document.createElement("div");
  container.className = "modal-wrapper";

  container.innerHTML = /*HTML*/ `
    <div>${title}</div>
    <div>${subTitle}</div>
    <div class = "buttonGroup">
    </div>
  `;

  console.log("모달을 클릭하였습니다.");

  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
  .modal-wrapper{
    top: 50%;
    left: 50%;
    max-width: var(--max-width-md);
    transform: translate(-50%, -50%);
    background: var(--color-card);
    position:absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 30px;
    border-radius: 20px;
    gap: var(--gap-mn);
    z-index: 2;
  }

  .modal-wrapper div{
    font-size: var(--font-size-base);
  }

  .modal-wrapper div:first-child{
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-lg);

  }
  .buttonGroup {
    display:flex;
    gap:var(--gap-mn);
  }

  .modal-overlay{
      position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  `;

  //뒤에 오버레이 레이어
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  //버튼 생성
  const confirmButton = confirmBtn();
  const containerWrapper = document.createElement("div");
  containerWrapper.id = "modal";

  onClick = onClick !== null ? onClick : () => console.log("클릭함");
  confirmButton.addEventListener("click", () => {
    onClick();
    containerWrapper.remove();
  });

  //나가기 버튼
  const quitButton = quitBtn(containerWrapper);

  const buttonGroup = container.querySelector(".buttonGroup");

  buttonGroup.appendChild(quitButton); //취소 버튼
  buttonGroup.appendChild(confirmButton); //확인 버튼

  containerWrapper.appendChild(style);
  containerWrapper.appendChild(container);
  containerWrapper.appendChild(overlay);

  return containerWrapper;
}

export default Modal;

//modal 자체는 ui고 handler가
