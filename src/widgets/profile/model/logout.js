import sessionUser from "../../../shared/utils/session.js";

function logout() {
  sessionUser.logout();
  location.hash = "/login";
  console.log(sessionUser.getUser);
}

export default logout;
