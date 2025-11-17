import userGetFetch from "../../../features/user/api/userGetFetch.js";
import sessionUser from "../../../shared/utils/session.js";
import { userInfoProps } from "../model/userInfoProps.js";
import UserInfoPage from "../ui/UserInfoPage.js";

function handleUserInfo() {
  const user = sessionUser.getUser();

  const props = userInfoProps(user);
  return UserInfoPage(props);
}

export default handleUserInfo;
