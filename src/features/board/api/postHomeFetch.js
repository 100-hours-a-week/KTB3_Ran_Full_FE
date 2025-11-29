import { Endpoint } from "../../../shared/api/endpoint.js";

async function post() {
  const token = sessionStorage.getItem("accessToken");
  try {
    const token = sessionStorage.getItem("accessToken");
    const response = await fetch(Endpoint.POST.POST, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await response.json();
    console.log(json);
    if (response.ok) {
      const data = json.data;
      console.log(data);
      return data;
    } else {
      console.log("data가 없으세요.");
      throw new Error("POST_FETCH_FAILED");
    }
  } catch (error) {
    throw error;
  }
}

export default post;
