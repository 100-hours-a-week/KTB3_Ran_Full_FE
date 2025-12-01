import commentCreatFetch from "../../../../features/comment/api/commentCreatFetch.js";
import BoardPostDetailEffect from "../model/BoardPostDetailEffect.js";
import handlePostDetail from "../../../../features/board/model/handlePostDetail.js";
import setState from "../../../../shared/state/currentState.js";

async function handleCreatComment({ dto, postId }) {
  //필요한 props : postId
  console.log(postId);
  if (dto.content === 0) {
    alert("댓글을 입력해주세요.");
    return;
  }

  //comment creat fetch
  await commentCreatFetch({ dto, postId });

  //comment get fetch : state 변경 및 저장
  handlePostDetail(postId).then((data) => {
    setState({
      post: data.postData,
      comments: data.commentsData,
    });
  });
}

export default handleCreatComment;
