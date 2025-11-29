import { Endpoint } from "../../../shared/api/endpoint.js";
import sessionUser from "../../../shared/utils/session.js";

async function postDeleteFetch(postId) {
  const token = sessionStorage.getItem("accessToken");
  try {
    const response = await fetch(Endpoint.POST.DELETE(postId), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    const json = await response.json();

    if (response.ok) {
      const data = json.data;
      console.log("data", data);
      location.hash = "/home";

      return response;
    } else {
      console.log("data가 없으세요.", data);
      throw new Error("error");
    }
  } catch (error) {
    console.log(error);
  }
}

export default postDeleteFetch;
