import { Endpoint } from "../../../shared/api/endpoint.js";

async function userGetFetch(userId) {
  try {
    const response = await fetch(`${Endpoint.USER.INFO}/${userId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();
    console.log(json);
    if (response.ok) {
      const data = json.data ?? null;
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

export default userGetFetch;
