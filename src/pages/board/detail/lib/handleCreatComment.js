import commentCreatFetch from "../../../../features/comment/api/commentCreatFetch.js";
import BoardPostDetailEffect from "../model/BoardPostDetailEffect.js";
import handlePostDetail from "../../../../features/board/model/handlePostDetail.js";
import setState from "../../../../shared/state/currentState.js";

async function handleCreatComment({ dto, postId }) {
  //댓글 작성 버튼을 누르면 -> 버튼의 input 값을 props에 넣음 -> dto로 동봉하여 보냄
  //필요한 props : postId
  console.log(dto.content);
  if (dto.content === 0) {
    alert("댓글을 입력해주세요.");
    return;
  }
  console.log(postId);

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
