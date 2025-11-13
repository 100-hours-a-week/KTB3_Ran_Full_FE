import { Endpoint } from "../../../shared/api/endpoint.js";

async function userUpdateFetch(props) {
  try {
    const response = await fetch(`${Endpoint.USER.INFO}/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props),
    });

    const data = (await response.json()).data;

    if (response.ok) {
      console.log(data);
      return data;
    } else {
      console.log("data가 없으세요.");
      throw error;
    }
  } catch (error) {
    console.log("너가 백엔드를 못한 잘못이다.");
  }
}

export default userUpdateFetch;
