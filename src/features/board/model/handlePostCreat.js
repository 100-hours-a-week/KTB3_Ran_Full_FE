import { getState } from "../../../shared/state/currentState.js";
import postCreatFetch from "../api/postCreatFetch.js";
import { postCreatDto } from "./postCreatDto.js";

async function handlePostCreat() {
  console.log("handlePostCreat 등록됨");
  const state = getState();
  const props = {
    title: state.title,
    content: state.content,
  };

  const postCreatEl = postCreatDto(props);

  const postCreatData = await postCreatFetch(postCreatEl);
  location.hash = "/home";

  return postCreatData;
}

export default handlePostCreat;
