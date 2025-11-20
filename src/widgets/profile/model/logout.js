import sessionUser from "../../../shared/utils/session.js";

function logout() {
  sessionUser.logout();
  console.log(sessionUser.getUser);
}

export default logout;
