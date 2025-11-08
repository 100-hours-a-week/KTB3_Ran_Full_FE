import { Endpoint } from "../../../shared/api/endpoint.js";

async function signup(signupProps) {
  try {
    const response = await fetch(Endpoint.USER.SIGNUP, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupProps),
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
