import post from "../api/postHomeFetch.js";

async function handleBoardGet() {
  const postGet = await post();

  return postGet;
}
export default handleBoardGet;
