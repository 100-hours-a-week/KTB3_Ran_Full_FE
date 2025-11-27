import handlePostDetail from "../../../../features/board/model/handlePostDetail.js";
import setState, {getState} from "../../../../shared/state/currentState.js";

let initialized = false;

function BoardPostDetailEffect(postId) {
    if (initialized) return; //effect시 한번만 실행
    initialized = true;
  handlePostDetail(postId).then((data) => {
    setState({
        post: data.postData,
        comments: data.commentsData,
    });
  });
  console.log("state:",getState());
}

export default BoardPostDetailEffect;
