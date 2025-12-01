import { boardDetailProps } from "../../../pages/board/model/boardDto.js";
import { commentDto } from "../../../pages/board/model/commentDto.js";
import postDetail from "../api/postDetailFetch.js";

async function handlePostDetail(postId) {
  try {
    const data = await postDetail(postId);

    const postData = boardDetailProps(data);
    const commentsData = data.comments.map(commentDto);
    return { postData, commentsData };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default handlePostDetail;
