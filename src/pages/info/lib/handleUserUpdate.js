import userUpdateFetch from "../../../features/user/api/userUpdateFetch.js";

function handleUserUpdate() {
  console.log("수정하기 버튼 클릭용");

  return userUpdateFetch(props);
}

export default handleUserUpdate;
