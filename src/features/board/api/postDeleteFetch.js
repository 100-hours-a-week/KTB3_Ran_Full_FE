import { Endpoint } from "../../../shared/api/endpoint.js";
import apiFetch from "../../../shared/api/fetchWrapper.js";
import sessionUser from "../../../shared/utils/session.js";

async function postDeleteFetch(postId) {
  return await apiFetch(Endpoint.POST.DELETE(postId), {
    method: "DELETE",
  });
}

export default postDeleteFetch;
