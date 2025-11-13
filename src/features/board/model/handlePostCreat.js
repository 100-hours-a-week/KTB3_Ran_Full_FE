import postCreatFetch from "../api/postCreatFetch.js";
import { postCreatDto } from "./postCreatDto.js";

async function handlePostCreat() {
  const props = {
    title: document.querySelector("#post-title").value,
    content: document.querySelector("#post-content").value,
  };

  const postCreatEl = postCreatDto(props);

  const postCreatData = await postCreatFetch(postCreatEl);

  console.log(postCreatData);

  return postCreatData;
}

export default handlePostCreat;
