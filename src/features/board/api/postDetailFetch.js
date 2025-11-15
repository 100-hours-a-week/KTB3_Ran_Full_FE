import main from "../../../app/main.js";
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

    let json = null;
    if (response.ok) {
      json = await response.json();
      const data = json.data;
      console.log(data);

      const postData = boardDetailProps(data);
      const commentsData = data.comments.map(commentDto);
      return { postData, commentsData };
    } else {
      throw new Error(data?.messgae);
    }
  } catch (error) {
    throw error;
  }
}

export default postDetail;
