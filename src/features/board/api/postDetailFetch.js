import { boardDetailProps } from "../../../pages/board/model/boardDto.js";
import { commentDto } from "../../../pages/board/model/commentDto.js";
import { Endpoint } from "../../../shared/api/endpoint.js";
import apiFetch from "../../../shared/api/fetchWrapper.js";

async function postDetail(postId) {
  return apiFetch(`${Endpoint.POST.GET}/${postId}`);
}

export default postDetail;
