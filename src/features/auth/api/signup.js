import { Endpoint } from "../../../shared/api/endpoint.js";

async function signup({ email, password, confirmPassword, username }) {
  try {
    const response = await fetch(Endpoint.USER.SIGNUP, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, confirmPassword, username }),
    });

    const data = await response.json(); //직렬화

    console.log(data);

    if (!response.ok) {
      throw new Error(data?.message);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export default signup;
