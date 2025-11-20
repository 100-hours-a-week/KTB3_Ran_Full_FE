import { boardDetailProps } from "../../../pages/board/model/boardDto.js";
import { commentDto } from "../../../pages/board/model/commentDto.js";
import { Endpoint } from "../../../shared/api/endpoint.js";

async function postDetail(postId) {
  try {
    const response = await fetch(`${Endpoint.POST.GET}/${postId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const json = await response.json();
    console.log(json);
    if (response.ok) {
      const data = json.data;

      const postData = boardDetailProps(data);
      console.log(postData);
      const commentsData = data.comments.map(commentDto);
      return { postData, commentsData };
    } else {
      location.hash = "/";
      console.log("data가 없으세요.", data);
      throw error;
    }
  } catch (error) {
    throw error;
  }
}

export default postDetail;
