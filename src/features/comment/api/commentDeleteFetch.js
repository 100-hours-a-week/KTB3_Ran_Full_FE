import main from "../../../app/main.js";
import { Endpoint } from "../../../shared/api/endpoint.js";

async function commentDeleteFetch(Id) {
  try {
    const response = await fetch(Endpoint.COMMENT.DELETE(Id), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    let data = null;

    if (response.ok) {
      data = await response.json();
      console.log(data);
      main();
      return data;
    } else {
      console.log("data가 없대요");
      throw error;
    }
  } catch (error) {
    console.log("백엔드 오류");
  }
}

export default commentDeleteFetch;
