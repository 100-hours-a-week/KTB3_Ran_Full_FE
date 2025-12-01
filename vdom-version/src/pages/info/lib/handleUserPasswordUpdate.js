import userPasswordUpdateFetch from "../../../features/user/api/userPasswordUpdateFetch.js";
import userUpdateFetch from "../../../features/user/api/userUpdateFetch.js";
import { userInfoDto } from "../../../features/user/model/userInfoDto.js";
import toast from "../../../shared/utils/handleToast.js";

function handleUserPasswordUpdate({ dto }) {
  const data = userPasswordUpdateFetch({ dto });
  if (data) toast("수정완료");
}

export default handleUserPasswordUpdate;
