import main from "../../../app/main.js";
import { routerPage } from "../../../app/router.js/router.js";
import { Endpoint } from "../../../shared/api/endpoint.js";

async function signup(dto) {
  try {
    const response = await fetch(Endpoint.USER.SIGNUP, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dto),
    });

    let data = await response.json();
    console.log(response);

    if (!response.ok) {
      console.log(response, data);
      throw new Error(data?.message);
    } else {
      //ok true

      console.log("user :", data);
      location.hash = "/login";
      return data.data;
    }
  } catch (error) {
    throw error;
  }
}

export default signup;
