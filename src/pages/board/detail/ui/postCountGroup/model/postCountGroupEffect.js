import likeCreateDeleteTogle from "../../../../../../features/like/model/likeCreateDeleteTogle";

function postCountGroupEffet() {
  function onClick(e) {
    //예외처리
    const like = e.target.closet(".count-content.like");
    if (!like) return;

    const postId = e.target.id;

    likeCreateDeleteTogle({ container: like, props });
  }

  document.addEventListener("click", onClick);

  return () => {
    document.removeEventListener("click", onClick);
  };
}

export default postCountGroupEffet;
