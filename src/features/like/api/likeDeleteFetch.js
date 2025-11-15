import main from "../../../app/main.js";
import { Endpoint } from "../../../shared/api/endpoint.js";

async function likeDeleteFetch(postId) {
  try {
    const response = await fetch(Endpoint.LIKE.DELETE(postId), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      cache: "no-store",
    });

    let json = null;
    main();

    if (response.ok) {
      json = await response.json();
      const data = json.data ?? null;
      return data;
    } else {
      console.log("data가 없대요");
      throw error;
    }
  } catch (error) {
    console.log("백엔드 오류");
  }
}

export default likeDeleteFetch;
