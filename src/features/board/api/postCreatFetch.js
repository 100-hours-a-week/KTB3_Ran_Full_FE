import { Endpoint } from "../../../shared/api/endpoint.js";
import apiFetch from "../../../shared/api/fetchWrapper.js";

async function postCreatFetch(dto) {
  return await apiFetch(Endpoint.POST.POST, {
    method: "POST",
    body: JSON.stringify(dto),
  });
}

export default postCreatFetch;
