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

    let data = null;
    if (response.ok) {
      data = await response.json();
      console.log(data);
      main();
      return data;
    } else {
      console.log("data 오류");
    }
  } catch (error) {
    console.log(error);
  }
}

export default postUpdateFetch;
