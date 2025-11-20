import { Endpoint } from "../../../shared/api/endpoint.js";

async function commentDeleteFetch(Id) {
  try {
    const response = await fetch(Endpoint.COMMENT.DELETE(Id), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

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

export default commentDeleteFetch;
