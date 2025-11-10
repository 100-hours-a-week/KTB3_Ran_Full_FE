import post from "../../../../features/board/api/post.js";

async function handleBoardGet() {
  const postGet = await post();

  return postGet.data;
}
export default handleBoardGet;
