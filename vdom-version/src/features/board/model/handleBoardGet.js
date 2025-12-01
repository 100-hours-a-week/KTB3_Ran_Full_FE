import post from "../api/postHomeFetch.js";

async function handleBoardGet() {
  const data = await post();

  return data;
}
export default handleBoardGet;
