import { Endpoint } from "../../../shared/api/endpoint.js";

async function post() {
  try {
    const response = await fetch(Endpoint.POST.POST, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log("postData:", data);

    if (!response.ok) {
      throw new Error(data?.messgae);
    }

    if (response.ok) {
    }
    return data;
  } catch (error) {
    throw error;
  }
}

export default post;
