import { Endpoint } from "../../../shared/api/endpoint.js";

async function likeDeleteFetch(postId) {
  try {
    const response = await fetch(Endpoint.LIKE.DELETE(postId), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      cache: "no-store",
    });

    const json = await response.json();

    console.log(json);
    if (response.ok) {
      const data = json.data ?? null;
      console.log(data);
      return data;
    } else {
      console.log("data가 없으세요.", data);
      throw error;
    }
  } catch (error) {
    console.log("백엔드 오류");
  }
}

export default likeDeleteFetch;
