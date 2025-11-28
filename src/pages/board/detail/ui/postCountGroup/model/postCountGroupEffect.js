import likeCreateDeleteTogle from "../../../../../../features/like/model/likeCreateDeleteTogle.js";

function postCountGroupEffet() {
  function onClick() {
    console.log("postCountGroupEffect");
    likeCreateDeleteTogle();
  }

  document.addEventListener("click", onClick);

  return () => {
    document.removeEventListener("click", onClick);
  };
}

export default postCountGroupEffet;
