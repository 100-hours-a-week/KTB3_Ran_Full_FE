import handlerPostCreat from "../../../features/navigation/handlerPostCreat.js";

function imgButtonEffect() {
  console.log("imgButtonEffect 실행됨");

  function onClick(e) {
    //closet : 어떤 요소를 잡더라도 결국 #creat-post-btn으로 반환함.
    const btn = e.target.closest("#creat-post-btn");
    if (!btn) return;

    handlerPostCreat();
  }

  document.addEventListener("click", onClick);

  return () => {
    document.removeEventListener("click", onClick);
  };
}

export default imgButtonEffect;
