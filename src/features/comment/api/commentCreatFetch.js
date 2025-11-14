import main from "../../../app/main.js";
import { Endpoint } from "../../../shared/api/endpoint.js";

async function commentCreatFetch(props) {
  const [, route, action, postId] = location.hash.replace("#", "").split("/");
  try {
    const response = await fetch(Endpoint.COMMENT.POST(postId), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props),
      credentials: "include",
      cache: "no-store",
    });

    const data = (await response.json()).data;

    if (response.ok) {
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

export default commentCreatFetch;
