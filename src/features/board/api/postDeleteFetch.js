import { Endpoint } from "../../../shared/api/endpoint.js";

async function postDeleteFetch(postId) {
  try {
    const response = await fetch(Endpoint.POST.DELETE(postId), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    let data = null;
    if (response.ok) {
      data = await response.json();
      console.log(data);
      return data;
    } else {
      console.log("data 오류");
    }
  } catch (error) {
    console.log(error);
  }
}

export default postDeleteFetch;
