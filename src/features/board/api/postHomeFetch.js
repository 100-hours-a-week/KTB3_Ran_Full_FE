import main from "../../../app/main.js";
import { Endpoint } from "../../../shared/api/endpoint.js";

async function post() {
  try {
    const response = await fetch(Endpoint.POST.POST, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
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
    throw error;
  }
}

export default post;
