import BoardPostDetailPage from "../../../pages/board/detail/ui/BoardPostDetailPage.js";
import { boardDetailProps } from "../../../pages/board/model/boardDto.js";
import { commentDto } from "../../../pages/board/model/commentDto.js";
import { Endpoint } from "../../../shared/api/endpoint.js";

async function postDetail(postId) {
  try {
    const response = await fetch(`${Endpoint.POST.GET}/${postId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = (await response.json()).data;
    console.log(data);

    const postData = boardDetailProps(data);
    const commentsData = data.comments.map(commentDto);

    if (!response.ok) {
      throw new Error(data?.messgae);
    }

    return { postData, commentsData };
  } catch (error) {
    throw error;
  }
}

export default postDetail;
