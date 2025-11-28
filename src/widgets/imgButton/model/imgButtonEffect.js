import handlerPostCreat from "../../../features/navigation/handlerPostCreat.js";

function imgButtonEffect() {
  console.log("imgButtonEffect 실행됨");

  function onClick(e) {
    const btnId = e.target.id;
    if (btnId === "creat-post-btn") {
      handlerPostCreat();
    }
  }
  document.addEventListener("click", onClick);

  return () => {
    document.removeEventListener("click", onClick);
  };
}

export default imgButtonEffect;
