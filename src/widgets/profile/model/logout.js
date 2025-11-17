import main from "../../../app/main.js";
import sessionUser from "../../../shared/utils/session.js";

function logout() {
  sessionUser.logout();
  main();
  console.log(sessionUser.getUser);
}

export default logout;
