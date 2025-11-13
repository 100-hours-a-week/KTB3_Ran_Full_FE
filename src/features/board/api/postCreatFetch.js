import { Endpoint } from "../../../shared/api/endpoint.js";

async function postCreatFetch(dto) {
  try {
    const response = await fetch(`${Endpoint.POST.POST}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dto),
      credentials: "include",
    });

    const data = (await response.json()).data;

    console.log(data);

    if (!response.ok) {
      throw new Error(data?.messgae);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export default postCreatFetch;
