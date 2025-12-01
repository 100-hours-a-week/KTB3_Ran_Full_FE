import sessionUser from "../../../shared/utils/session.js";
import { passwordModifyProps } from "../model/passwordModifyProps.js";
import PasswordModifyPage from "../ui/PasswordModifyPage.js";

function handlePasswordModify() {
  const user = sessionUser.getUser();
  const props = passwordModifyProps(user);
  return PasswordModifyPage();
}

export default handlePasswordModify;
