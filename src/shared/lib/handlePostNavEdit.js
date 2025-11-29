import { routerPage } from "../../app/router.js/router.js";
import BoardPostUpdatePage from "../../pages/board/update/ui/BoardPostUpdatePage.js";
import { navigateTo } from "../router/Router.js";

// VDOM 전
// function handlePostEdit(props) {
//   const Page = routerPage["/post/update"];
//   Page(props);
//   console.log(props);
//   const app = document.querySelector(".container");
//   app.innerHTML = "";
//   app.appendChild(Page(props));
//   return BoardPostUpdatePage(props);
// }

function handlePostEdit(postId) {
  location.hash = `/post/update/${postId}`;
}

export default handlePostEdit;
