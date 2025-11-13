import commentCreatFetch from "../../../../features/comment/api/commentCreatFetch.js";
import { creatCommentDto } from "../../../../features/comment/model/creatCommentDto.js";

function handleCreatComment(content) {
  //댓글 작성 버튼을 누르면 -> 버튼의 input 값을 props에 넣음 -> dto로 동봉하여 보냄
  //필요한 props : postId
  const props = {
    content,
  };
  const dto = creatCommentDto(props);
  return commentCreatFetch(dto);
}

export default handleCreatComment;
