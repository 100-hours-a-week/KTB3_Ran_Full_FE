import main from "../../../app/main.js";
import { Endpoint } from "../../../shared/api/endpoint.js";

async function postUpdateFetch({ dto, postId }) {
  console.log(dto);
  try {
    const response = await fetch(Endpoint.POST.UPDATE(postId), {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dto),
      credentials: "include",
    });

    const json = await response.json();
    console.log(json);
    if (response.ok) {
      const data = json.data;
      main();
      console.log(data);
      return data;
    } else {
      console.log("data가 없으세요.", data);
      throw error;
    }
  } catch (error) {
    throw new Error(error);
  }
}

export default postUpdateFetch;
