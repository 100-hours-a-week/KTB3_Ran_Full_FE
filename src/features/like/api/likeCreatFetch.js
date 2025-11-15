import main from "../../../app/main.js";
import { Endpoint } from "../../../shared/api/endpoint.js";

async function likeCreatFetch(postId) {
  try {
    const response = await fetch(Endpoint.LIKE.POST(postId), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      cache: "no-store",
    });

    let json = null;
    //좋아요가 되든 안되든 새로고침은 항상
    main();

    if (response.ok) {
      json = await response.json();
      console.log(data);
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

export default likeCreatFetch;
