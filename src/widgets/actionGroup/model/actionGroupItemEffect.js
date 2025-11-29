import { ContentType } from "../../../shared/lib/ContentType.js";
import handleCommentDelete from "../../../shared/lib/handleCommentDelete.js";
import handleCommentNav from "../../../shared/lib/handleCommentNav.js";
import handlePostDelete from "../../../shared/lib/handlePostDelete.js";
import handlePostEdit from "../../../shared/lib/handlePostNavEdit.js";
import modalController from "./modalController.js";

//effect 읽고 행동 수행밖에 못함.
export default function actionGroupItemEffect() {
  const wrappers = document.querySelectorAll(".action-group-wrapper");
  if (!wrappers.length) return;

  const cleanups = [];

  const handlerTable = {
    comment: {
      edit: ({ postId, commentId }) => handleCommentNav({ postId, commentId }),
      delete: ({ postId, commentId }) =>
        handleCommentDelete({ postId, commentId }),
    },

    post: {
      edit: ({ postId }) => handlePostEdit(postId),
      delete: ({ postId }) => handlePostDelete(postId),
    },
  };

  wrappers.forEach((wrapper) => {
    const buttons = wrapper.querySelectorAll(".imgBtn");
    console.log(buttons); //버튼 잡힘

    buttons.forEach((btn) => {
      const handler = (e) => {
        e.stopPropagation();

        console.log(btn); //버튼 잡힘

        const actionType = btn.dataset.actionType; // edit | delete
        const domainType = btn.dataset.domainType; // post | comment
        const postId = Number(btn.dataset.postId);
        console.log(postId);
        const commentId = Number(btn.dataset.commentId);

        //해당 도메인의 handler가 없다면 반환
        if (!handlerTable[domainType]) return;
        const executor = handlerTable[domainType][actionType];

        //payload 정의
        const payload = {
          actionType,
          domainType,
          postId,
          commentId,
        };

        // 모달 열기
        modalController.open(actionType, domainType, () => executor(payload));
      };

      btn.addEventListener("click", handler);
      cleanups.push(() => btn.removeEventListener("click", handler));
    });
  });

  return () => cleanups.forEach((c) => c());
}
