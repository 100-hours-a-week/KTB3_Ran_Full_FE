import main from "../../app/main.js";
import { routerPage } from "../../app/router.js/router.js";
import BoardPostUpdatePage from "../../pages/board/update/ui/BoardPostUpdatePage.js";

function handlePostEdit(props) {
  const Page = routerPage["/post/update"];
  Page();
  const app = document.querySelector(".container");
  app.innerHTML = "";
  app.appendChild(Page(props));
  return BoardPostUpdatePage(props);
}

export default handlePostEdit;
