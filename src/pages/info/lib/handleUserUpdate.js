import userUpdateFetch from "../../../features/user/api/userUpdateFetch.js";
import { userInfoDto } from "../../../features/user/model/userInfoDto.js";

function handleUserUpdate({ dto }) {
  return userUpdateFetch({ dto });
}

export default handleUserUpdate;
