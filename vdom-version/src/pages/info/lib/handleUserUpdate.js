import userUpdateFetch from "../../../features/user/api/userUpdateFetch.js";
import { userInfoDto } from "../../../features/user/model/userInfoDto.js";
import toast from "../../../shared/utils/handleToast.js";

function handleUserUpdate({ dto }) {
  const data = userUpdateFetch({ dto });
  if (data) toast("수정완료");
}

export default handleUserUpdate;
