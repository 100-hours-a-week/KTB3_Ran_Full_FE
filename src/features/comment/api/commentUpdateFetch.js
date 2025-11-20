import { Endpoint } from "../../../shared/api/endpoint.js";

async function commentUpdateFetch({ dto, postId, commentId }) {
  console.log(dto);
  try {
    const response = await fetch(
      Endpoint.COMMENT.UPDATE({ postId, commentId }),
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
        credentials: "include",
        cache: "no-store",
      }
    );

    const json = await response.json();
    console.log(json);
    if (response.ok) {
      const data = json.data;
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

export default commentUpdateFetch;
