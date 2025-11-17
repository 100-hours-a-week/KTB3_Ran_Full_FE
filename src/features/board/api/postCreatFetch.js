import main from "../../../app/main.js";
import { Endpoint } from "../../../shared/api/endpoint.js";

async function postCreatFetch(dto) {
  try {
    const response = await fetch(`${Endpoint.POST.POST}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dto),
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
    throw error;
  }
}

export default postCreatFetch;
