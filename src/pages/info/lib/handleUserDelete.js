import userDeleteFetch from "../../../features/user/api/userDeleteFetch.js";
import sessionUser from "../../../shared/utils/session.js";

function handleUserDelete() {
  sessionUser.logout();
  return userDeleteFetch();
}

export default handleUserDelete;
