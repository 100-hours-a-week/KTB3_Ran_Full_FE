import { creatCommentDto } from "../../../features/comment/model/creatCommentDto.js";
import handleCreatComment from "../../../pages/board/detail/lib/handleCreatComment.js";
import {
  commentCreatBtn,
  commentUpdateBtn,
} from "../../../shared/ui/Button/ui/ButtonPresets.js";

function commentCreatCard(post) {
  const container = document.createElement("div");
  container.className = "comment-creat-card";

  container.innerHTML = /*HTML*/ `
        <textarea placeholder="댓글을 남겨주세요!"></textarea>
  `;

  const style = document.createElement("style");
  style.textContent = /*CSS*/ `
    .comment-creat-card{
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        border-radius: 10px;
    }

    .comment-creat-card textarea{
            border: none;
            border-bottom: 1px solid var(--color-disable);
            border-radius: 10px 10px 0 0;
            height: 60px;
            padding:var(--padding-h3);
            resize:none;
    }
    .comment-creat-card textarea:focus{
        outline:none;
    }
    .buttonWrapper{
        background: #fff;
    border-radius: 0 0 10px 10px;
    padding: 5px;
    }
  `;

  //생성 버튼
  const text = container.querySelector("textarea");
  const containerWrapper = document.createElement("div");
  const textValue = text.value;

  console.log("commentCared :", post);
  const creatbutton = commentCreatBtn({
    getDto: () =>
      //getDto 생성 시점
      creatCommentDto({
        content: text.value,
      }),
    postId: post.id,
  });

  const buttonWrapper = document.createElement("div");
  buttonWrapper.className = "buttonWrapper";

  buttonWrapper.appendChild(creatbutton);
  buttonWrapper.dataset.mode = "create";

  //mode = create / mode = edit
  container.appendChild(buttonWrapper);

  // Object.defineProperty(containerWrapper, "value", {
  //   get: () => text.value,
  //   set: (v) => (text.value = v),
  // });

  containerWrapper.appendChild(style);
  containerWrapper.appendChild(container);

  return containerWrapper;
}

export default commentCreatCard;
